import React, { useState } from 'react';
import {
  BookOpen,
  ArrowRight,
  Layers,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Upload,
  CheckCircle2,
  FileText,
  Search,
  ExternalLink
} from 'lucide-react';
import { BRANCHES_DATA } from '../data/branchesData';
import { SectionType } from '../types';
import { BranchIcon } from './BranchIcon';
import { useNotes } from '../context/NotesContext';

interface BranchesSectionProps {
  onSelectBranchAndSem: (branchCode: string, sem?: number) => void;
  onSelectSubject: (subject: string) => void;
  onNavigate: (section: SectionType) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({
  onSelectBranchAndSem,
  onSelectSubject,
  onNavigate
}) => {
  const { setSelectedBranch, setSelectedSemester, setSearchQuery } = useNotes();
  const [activeBranchCode, setActiveBranchCode] = useState<string>('CSE');
  const [activeSemester, setActiveSemester] = useState<number>(3);
  const [expandedSubjectCode, setExpandedSubjectCode] = useState<string | null>(null);

  const selectedBranch =
    BRANCHES_DATA.find((b) => b.code === activeBranchCode) || BRANCHES_DATA[0];

  const currentSemesterData =
    selectedBranch.semesters.find((s) => s.semester === activeSemester) ||
    selectedBranch.semesters[0];

  const handleSubjectClick = (subjectName: string) => {
    setSelectedBranch(activeBranchCode);
    setSelectedSemester(activeSemester);
    setSearchQuery(subjectName);
    onSelectSubject(subjectName);
    onNavigate('browse');
  };

  const handleExploreBranchNotes = () => {
    setSelectedBranch(activeBranchCode);
    setSelectedSemester(activeSemester);
    onNavigate('browse');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
          <GraduationCap className="w-4 h-4" />
          <span>Curriculum & Syllabus Guide</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">
          Engineering Branches & Syllabus
        </h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Explore complete semester-by-semester courses, curriculum units, and verified lecture notes aligned with AICTE and university syllabi.
        </p>
      </div>

      {/* Branch Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {BRANCHES_DATA.map((branch) => {
          const isActive = branch.code === activeBranchCode;
          return (
            <button
              key={branch.code}
              onClick={() => {
                setActiveBranchCode(branch.code);
                // Reset active semester to first available semester in this branch if current doesn't exist
                const exists = branch.semesters.some((s) => s.semester === activeSemester);
                if (!exists && branch.semesters.length > 0) {
                  setActiveSemester(branch.semesters[0].semester);
                }
              }}
              className={`p-3 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-slate-900 border-sky-500 shadow-lg shadow-sky-950/40 ring-1 ring-sky-500'
                  : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isActive
                      ? 'bg-sky-500 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  <BranchIcon name={branch.iconName} className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {branch.code}
                </span>
              </div>
              <div>
                <p className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {branch.name}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  {branch.totalNotes} notes
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Branch Hero & Stats Details */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
                Department of {selectedBranch.code}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                4-Year B.Tech / B.E Curriculum
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {selectedBranch.name}
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
              {selectedBranch.shortDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleExploreBranchNotes}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Browse All {selectedBranch.code} Notes</span>
            </button>
            <button
              onClick={() => onNavigate('upload')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload {selectedBranch.code} Notes</span>
            </button>
          </div>
        </div>

        {/* Semester Selector Bar */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Select Semester</span>
            </h3>
            <span className="text-xs text-slate-400">
              Showing courses for <strong>Semester {activeSemester}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {selectedBranch.semesters.map((semGroup) => {
              const isCurrent = activeSemester === semGroup.semester;
              return (
                <button
                  key={semGroup.semester}
                  onClick={() => setActiveSemester(semGroup.semester)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                    isCurrent
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md'
                      : 'bg-slate-950/70 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  }`}
                >
                  <span>Semester {semGroup.semester}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isCurrent ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {semGroup.subjects.length} subjects
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Semester Subjects Grid & Syllabus Units */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span>Curriculum for Semester {activeSemester}</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {currentSemesterData ? currentSemesterData.subjects.length : 0} Core Subjects
            </span>
          </h3>
        </div>

        {currentSemesterData && currentSemesterData.subjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentSemesterData.subjects.map((subj) => {
              const isExpanded = expandedSubjectCode === subj.code;
              return (
                <div
                  key={subj.code}
                  className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                          {subj.code}
                        </span>
                        <span className="text-xs text-slate-400">
                          {subj.credits} Credits
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-100">
                        {subj.name}
                      </h4>
                    </div>

                    <button
                      onClick={() => handleSubjectClick(subj.name)}
                      className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-400 hover:text-sky-300 text-xs font-bold border border-sky-500/30 transition-colors cursor-pointer"
                    >
                      <span>Find Notes</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {subj.description}
                  </p>

                  {/* Units Accordion Toggle */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() =>
                        setExpandedSubjectCode(isExpanded ? null : subj.code)
                      }
                      className="w-full flex items-center justify-between text-xs text-slate-400 hover:text-slate-200 font-medium py-1 cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-sky-400" />
                        <span>Syllabus Units ({subj.units.length} Modules)</span>
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isExpanded ? 'rotate-90 text-sky-400' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-2 space-y-1.5 pl-2 border-l-2 border-sky-500/40 py-1">
                        {subj.units.map((unit, uIdx) => (
                          <div
                            key={uIdx}
                            className="text-xs text-slate-300 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                            <span>{unit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400">
            Syllabus information for Semester {activeSemester} will be updated shortly.
          </div>
        )}
      </div>

      {/* Syllabi FAQ & Study Guidance */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Curriculum Tips for Engineering Students</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <strong className="text-slate-200 block mb-1">
              • How to prepare for Midterm exams?
            </strong>
            Prioritize high-yield units (typically Unit 1 & Unit 2). Review handwritten formula cheat sheets before attempting past university 5-mark and 10-mark solved questions.
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <strong className="text-slate-200 block mb-1">
              • Missing notes for an elective subject?
            </strong>
            You can upload handwritten lecture notes or professor slides through the Upload portal and earn contributor karma and reputation points.
          </div>
        </div>
      </div>
    </div>
  );
};
