import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password?: string) => Promise<boolean>;
  registerWithEmail: (data: {
    name: string;
    email: string;
    college: string;
    branch: string;
    semester: number;
  }) => Promise<boolean>;
  loginDemoStudent: () => void;
  loginDemoTopper: () => void;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  isBookmarkSaved: (noteId: string) => boolean;
  toggleUserBookmark: (noteId: string) => void;
}

const DEFAULT_DEMO_USER: User = {
  id: 'user-demo-1',
  name: 'Aryan Sharma',
  email: 'aryan.sharma@nitk.edu',
  college: 'National Institute of Technology Karnataka',
  branch: 'CSE',
  semester: 4,
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80',
  role: 'student',
  reputationPoints: 340,
  savedNoteIds: ['note-1', 'note-3'],
  downloadedNoteIds: ['note-1'],
  upvotedNoteIds: ['note-1', 'note-2'],
  uploadedNoteIds: []
};

const DEFAULT_TOPPER_USER: User = {
  id: 'user-topper-1',
  name: 'Pooja Hegde',
  email: 'pooja.hegde@iitb.ac.in',
  college: 'IIT Bombay Computer Science Dept',
  branch: 'CSE',
  semester: 6,
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
  role: 'topper',
  reputationPoints: 1250,
  savedNoteIds: ['note-1', 'note-2', 'note-4'],
  downloadedNoteIds: ['note-1', 'note-2'],
  upvotedNoteIds: ['note-1', 'note-2', 'note-4'],
  uploadedNoteIds: ['note-1']
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem('enginotes_user');
      if (stored) return JSON.parse(stored);
    } catch {
      // fallback
    }
    // Default to a demo student so the app is immediately alive and useful
    return DEFAULT_DEMO_USER;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('enginotes_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('enginotes_user');
    }
  }, [user]);

  const loginWithGoogle = async () => {
    // Authenticate with Google simulation
    const googleUser: User = {
      id: 'google-user-' + Date.now(),
      name: 'Aditi Rao',
      email: 'aditi.rao.eng@gmail.com',
      college: 'Delhi Technological University (DTU)',
      branch: 'CSE',
      semester: 4,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
      role: 'student',
      reputationPoints: 180,
      savedNoteIds: ['note-1'],
      downloadedNoteIds: ['note-1'],
      upvotedNoteIds: ['note-1'],
      uploadedNoteIds: []
    };
    setUser(googleUser);
  };

  const loginWithEmail = async (email: string) => {
    const existing: User = {
      id: 'email-user-' + Date.now(),
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email,
      college: 'Indian Institute of Engineering',
      branch: 'CSE',
      semester: 3,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      role: 'student',
      reputationPoints: 150,
      savedNoteIds: ['note-1'],
      downloadedNoteIds: [],
      upvotedNoteIds: [],
      uploadedNoteIds: []
    };
    setUser(existing);
    return true;
  };

  const registerWithEmail = async (data: {
    name: string;
    email: string;
    college: string;
    branch: string;
    semester: number;
  }) => {
    const newUser: User = {
      id: 'user-' + Date.now(),
      name: data.name,
      email: data.email,
      college: data.college,
      branch: data.branch,
      semester: data.semester,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80',
      role: 'student',
      reputationPoints: 100,
      savedNoteIds: [],
      downloadedNoteIds: [],
      upvotedNoteIds: [],
      uploadedNoteIds: []
    };
    setUser(newUser);
    return true;
  };

  const loginDemoStudent = () => {
    setUser(DEFAULT_DEMO_USER);
  };

  const loginDemoTopper = () => {
    setUser(DEFAULT_TOPPER_USER);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (!user) return;
    setUser({ ...user, ...updates });
  };

  const isBookmarkSaved = (noteId: string) => {
    return user?.savedNoteIds.includes(noteId) || false;
  };

  const toggleUserBookmark = (noteId: string) => {
    if (!user) return;
    const isSaved = user.savedNoteIds.includes(noteId);
    const newSaved = isSaved
      ? user.savedNoteIds.filter((id) => id !== noteId)
      : [...user.savedNoteIds, noteId];

    setUser({
      ...user,
      savedNoteIds: newSaved
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        loginDemoStudent,
        loginDemoTopper,
        logout,
        updateProfile,
        isBookmarkSaved,
        toggleUserBookmark
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
