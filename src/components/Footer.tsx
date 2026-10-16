import React from 'react';
import {
  GraduationCap,
  Heart,
  BookOpen,
  FolderGit2,
  Upload,
  User as UserIcon,
  ShieldCheck,
  Github,
  Mail,
  ArrowUpRight
} from 'lucide-react';
import { SectionType } from '../types';
import { BRANCHES_DATA } from '../data/branchesData';

interface FooterProps {
  onNavigate: (section: SectionType) => void;
  onSelectSubject: (subject: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectSubject }) => {
  const popularCourses = [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Signals & Systems',
    'Engineering Thermodynamics',
    'Design of Reinforced Concrete Structures (RCC)',
    'Deep Learning & Neural Networks',
    'Control Systems',
    'Database Management Systems'
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 py-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-200">
                EngiNotes Open Academic Repository
              </h4>
              <p className="text-xs text-slate-400">
                Peer-to-peer engineering notes, handwritten summaries, and university exam solutions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onNavigate('upload');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs shadow-md transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Contribute Your Notes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Col 1: Platform */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Platform Navigation
          </h5>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => {
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-sky-400 transition-colors cursor-pointer"
              >
                Home Portal
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('browse');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-sky-400 transition-colors cursor-pointer"
              >
                Browse All Notes Library
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('branches');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-sky-400 transition-colors cursor-pointer"
              >
                Branches & Semester Syllabi
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('upload');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-sky-400 transition-colors cursor-pointer"
              >
                Upload & Share Study Material
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('account');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-sky-400 transition-colors cursor-pointer"
              >
                My Account & Saved Notes
              </button>
            </li>
          </ul>
        </div>

        {/* Col 2: Engineering Branches */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Engineering Branches
          </h5>
          <ul className="space-y-2">
            {BRANCHES_DATA.slice(0, 6).map((branch) => (
              <li key={branch.code}>
                <button
                  onClick={() => {
                    onNavigate('branches');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-sky-400 transition-colors cursor-pointer flex items-center justify-between w-full text-left"
                >
                  <span>{branch.name}</span>
                  <span className="text-[10px] text-slate-400">({branch.code})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Popular Subjects */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            High-Yield Subjects
          </h5>
          <ul className="space-y-2">
            {popularCourses.slice(0, 6).map((course, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    onSelectSubject(course);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left line-clamp-1"
                >
                  {course}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Community & Guidelines */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Study Integrity
          </h5>
          <p className="text-xs text-slate-400 leading-relaxed">
            All materials shared on EngiNotes are intended for educational peer learning and exam revision. We encourage students to cite original course instructors and textbooks.
          </p>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified & Moderated
            </span>
            <p className="text-[11px] text-slate-400">
              Community reviewed by college toppers and university rank holders.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-slate-800/80 py-6 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>
            © 2026 EngiNotes Hub. Built with ❤️ for engineering students across universities.
          </p>
          <div className="flex items-center gap-4">
            <span>Free & Open Source Learning</span>
            <span>•</span>
            <span>AICTE / University Syllabus Aligned</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
