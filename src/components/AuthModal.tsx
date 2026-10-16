import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Mail,
  Lock,
  User as UserIcon,
  GraduationCap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BRANCHES_DATA } from '../data/branchesData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { loginWithGoogle, loginWithEmail, registerWithEmail, loginDemoStudent, loginDemoTopper } =
    useAuth();

  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('CSE');
  const [semester, setSemester] = useState(3);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    setLoading(true);
    await loginWithGoogle();
    setLoading(false);
    onClose();
  };

  const handleDemoStudent = () => {
    loginDemoStudent();
    onClose();
  };

  const handleDemoTopper = () => {
    loginDemoTopper();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (mode === 'signin') {
      await loginWithEmail(email || 'student@university.edu');
    } else {
      await registerWithEmail({
        name: name || 'Student',
        email: email || 'student@university.edu',
        college: college || 'Engineering College',
        branch,
        semester
      });
    }

    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-2 shadow-lg shadow-sky-500/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            {mode === 'signin' ? 'Welcome Back to EngiNotes' : 'Join EngiNotes Study Hub'}
          </h2>
          <p className="text-xs text-slate-400">
            {mode === 'signin'
              ? 'Access verified lecture notes, bookmarks, and past year question banks.'
              : 'Sign up to upload your handwritten notes and earn reputation karma.'}
          </p>
        </div>

        {/* Google One-Click Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Demo profiles shortcut */}
        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-2xl">
          <p className="text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider text-center">
            Instant 1-Click Demo Profiles
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleDemoStudent}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-left border border-slate-700 cursor-pointer"
            >
              <span className="block text-xs font-bold text-sky-400">Aryan (NITK)</span>
              <span className="text-[10px] text-slate-400">CSE • 340 pts</span>
            </button>
            <button
              type="button"
              onClick={handleDemoTopper}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-left border border-slate-700 cursor-pointer"
            >
              <span className="block text-xs font-bold text-amber-400">Pooja (IITB)</span>
              <span className="text-[10px] text-slate-400">Topper • 1250 pts</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-slate-800"></div>
          <span className="flex-shrink mx-3 text-xs text-slate-400 uppercase font-semibold">
            Or with student email
          </span>
          <div className="flex-grow border-t border-slate-800"></div>
        </div>

        {/* Email form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'signup' && (
            <>
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name (e.g. Rahul Sharma)"
                  className="w-full bg-slate-950 text-xs sm:text-sm text-slate-100 placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-slate-800 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder="College / Institute Name"
                  className="w-full bg-slate-950 text-xs sm:text-sm text-slate-100 placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-slate-800 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="bg-slate-950 text-xs text-slate-200 px-3 py-2.5 rounded-xl border border-slate-800 focus:border-sky-500 focus:outline-none cursor-pointer"
                >
                  {BRANCHES_DATA.map((b) => (
                    <option key={b.code} value={b.code}>
                      {b.code}
                    </option>
                  ))}
                </select>

                <select
                  value={semester}
                  onChange={(e) => setSemester(Number(e.target.value))}
                  className="bg-slate-950 text-xs text-slate-200 px-3 py-2.5 rounded-xl border border-slate-800 focus:border-sky-500 focus:outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                    <option key={s} value={s}>
                      Sem {s}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          <div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="College / Personal Email Address"
              className="w-full bg-slate-950 text-xs sm:text-sm text-slate-100 placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-slate-800 focus:border-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-slate-950 text-xs sm:text-sm text-slate-100 placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-slate-800 focus:border-sky-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
          >
            <span>{mode === 'signin' ? 'Sign In' : 'Create Free Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Toggle signin / signup */}
        <div className="text-center pt-2">
          {mode === 'signin' ? (
            <p className="text-xs text-slate-400">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="text-sky-400 font-bold hover:underline cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p className="text-xs text-slate-400">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signin')}
                className="text-sky-400 font-bold hover:underline cursor-pointer"
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
