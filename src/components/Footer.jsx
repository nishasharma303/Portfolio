import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 px-4 sm:px-6 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 mb-2 text-sm sm:text-base">
          Designed & Built by {personalInfo.name}
        </p>
        <p className="text-gray-600 text-xs sm:text-sm">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}