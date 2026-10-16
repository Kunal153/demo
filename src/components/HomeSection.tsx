import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Download,
  CheckCircle,
  FileText,
  Flame,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Terminal,
  Brain,
  Wrench,
  Building,
  Zap,
  Layers
} from 'lucide-react';
import { Note, SectionType } from '../types';
import { BRANCHES_DATA } from '../data/branchesData';
import { NoteCard } from './NoteCard';
import { BranchIcon } from './BranchIcon';
import { useNotes } from '../context/NotesContext';

interface HomeSectionProps {
  notes: Note[];
  onNavigate: (section: SectionType) => void;
  onSelectSubject: (subject: string) => void;
  onPreviewNote: (note: Note) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  notes,
  onNavigate,
  onSelectSubject,
  onPreviewNote
}) => {
  const { setSearchQuery, setSelectedBranch, setSelectedSemester } = useNotes();
  const [localSearch, setLocalSearch] = useState('');
  const [selectedHeroBranch, setSelectedHeroBranch] = useState('ALL');
  const [featuredTab, setFeaturedTab] = useState<'all' | 'CSE' | 'ECE' | 'AIDS' | 'MECH'>('all');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedHeroBranch !== 'ALL') {
      setSelectedBranch(selectedHeroBranch);
    }
    if (localSearch.trim()) {
      setSearchQuery(localSearch.trim());
    }
    onNavigate('browse');
  };

  const handleBranchClick = (branchCode: string) => {
    setSelectedBranch(branchCode);
    onNavigate('browse');
  };

  const handleSemesterPillClick = (sem: number) => {
    setSelectedSemester(sem);
    onNavigate('browse');
  };

  // Filter featured notes
  const featuredNotes = notes
    .filter((n) => featuredTab === 'all' || n.branch === featuredTab)
    .slice(0, 6);

  const popularSubjectsList = [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Deep Learning & Neural Networks',
    'Signals & Systems',
    'Database Management Systems',
    'Strength of Materials',
    'Control Systems',
    'Computer Networks'
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/60 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-96 bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-purple-500/15 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -top-12 right-10 w-72 h-72 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 mb-6 shadow-sm hover:border-sky-500/40 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-sky-400">Semester Exam Prep 2026:</span>
            <span>Over 1,200+ Solved PYQs & Notes added</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Engineering Lecture Notes,{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Handwritten Summaries
            </span>{' '}
            & PYQ Solutions
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Curated and verified by university toppers and faculty across CSE, ECE, MECH, CIVIL, EEE, and AI & Data Science. Access complete 8-semester syllabi for free.
          </p>

          {/* Unified Search & Branch Filter Bar */}
          <form
            onSubmit={handleHeroSearch}
            className="mt-8 max-w-3xl mx-auto bg-slate-900/90 p-2 sm:p-2.5 rounded-2xl border border-slate-700/80 shadow-2xl shadow-sky-950/40 flex flex-col sm:flex-row items-center gap-2"
          >
            {/* Branch selector */}
            <div className="w-full sm:w-auto shrink-0">
              <select
                value={selectedHeroBranch}
                onChange={(e) => setSelectedHeroBranch(e.target.value)}
                className="w-full sm:w-auto bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold px-3 py-3 rounded-xl border border-slate-700 focus:outline-none focus:border-sky-500 cursor-pointer"
              >
                <option value="ALL">All Branches</option>
                <option value="CSE">CSE - Computer Science</option>
                <option value="ECE">ECE - Electronics</option>
                <option value="MECH">MECH - Mechanical</option>
                <option value="CIVIL">CIVIL - Civil Engg</option>
                <option value="EEE">EEE - Electrical</option>
                <option value="AIDS">AI & Data Science</option>
                <option value="IT">IT - Info Tech</option>
              </select>
            </div>

            {/* Keyword input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search subject (e.g. Data Structures, Thermodynamics, VLSI)..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 pl-10 pr-4 py-3 rounded-xl focus:outline-none"
              />
            </div>

            {/* Search Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all shrink-0 cursor-pointer"
            >
              <span>Find Notes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Semester Pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400 font-medium mr-1">Quick Semester Jump:</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <button
                key={sem}
                onClick={() => handleSemesterPillClick(sem)}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-300 border border-slate-800 transition-colors cursor-pointer"
              >
                Sem {sem}
              </button>
            ))}
          </div>

          {/* Trust & Metric Counters */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">15,000+</div>
              <p className="text-xs text-slate-400 mt-0.5">Verified Notes & PYQs</p>
            </div>
            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">8 Branches</div>
              <p className="text-xs text-slate-400 mt-0.5">Complete 1-8 Sem Syllabus</p>
            </div>
            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">52,000+</div>
              <p className="text-xs text-slate-400 mt-0.5">Engineering Students</p>
            </div>
            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100% Free</div>
              <p className="text-xs text-slate-400 mt-0.5">Open Academic Sharing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Subjects Quick Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-slate-100">Popular Exam Subjects</h2>
          </div>
          <button
            onClick={() => onNavigate('browse')}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {popularSubjectsList.map((subject, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSubject(subject)}
              className="shrink-0 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-2 group"
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>{subject}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Explore By Engineering Branch */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
              <Layers className="w-4 h-4" />
              <span>Academic Directory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Explore by Engineering Branch
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Select your department to access semester-wise courses, units, and verified materials.
            </p>
          </div>

          <button
            onClick={() => onNavigate('branches')}
            className="self-start sm:self-auto flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
          >
            <span>Full Syllabus Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRANCHES_DATA.slice(0, 8).map((branch) => (
            <div
              key={branch.code}
              onClick={() => handleBranchClick(branch.code)}
              className="group p-5 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <BranchIcon name={branch.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700/60">
                    {branch.code}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {branch.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {branch.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  <strong className="text-slate-200">{branch.totalNotes}</strong> notes available
                </span>
                <span className="text-sky-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  Browse <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured & High-Yield Notes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Award className="w-4 h-4" />
              <span>Top Rated Materials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Featured Notes & Question Banks
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Highest downloaded notes with step-by-step derivations and formulas.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {(
              [
                { id: 'all', label: 'All' },
                { id: 'CSE', label: 'CSE' },
                { id: 'ECE', label: 'ECE' },
                { id: 'AIDS', label: 'AI/DS' },
                { id: 'MECH', label: 'MECH' }
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFeaturedTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  featuredTab === tab.id
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onPreview={onPreviewNote}
              variant="grid"
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('browse')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors shadow-md cursor-pointer"
          >
            <span>Explore All {notes.length}+ Engineering Notes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Value Prop Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-indigo-950/60 border border-sky-500/20 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              Peer-To-Peer Learning
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 leading-tight">
              Got great semester notes? Help your juniors and earn contributor karma.
            </h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Upload your handwritten lecture notes, formula sheets, or solved exam papers. Get recognized by peers across institutions with verified contributor badges.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('upload')}
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Upload Your Notes (+50 pts)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('branches')}
                className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                Check Branch Syllabi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why EngiNotes Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineered for Academic Excellence
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Why thousands of engineering students use EngiNotes before midterm and final exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">Quality Moderation</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Every document is scanned for readability, unit syllabus alignment, and accuracy by branch toppers before receiving a Verified badge.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">Interactive Document Viewer</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Read notes page-by-page directly in your browser with zoom, formulas, highlighted code blocks, and AI key points before downloading.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">8 Semesters Full Coverage</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              From First Year foundational physics and calculus to Final Year machine learning, cloud architecture, and capstone documentation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
