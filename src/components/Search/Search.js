'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Search() {
  const [search, setSearch] = useState('');
  const [applyData, setApplyData] = useState([]);
  const [showApplyData, setShowApplyData] = useState(false);
  const inputRef = useRef(null);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    if (!search) {
      setApplyData([]);
      setShowApplyData(false);
      return;
    }

    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/experiments/Search?Search=${encodeURIComponent(search)}`);
        if (!res.ok) throw new Error('Error fetching');
        const data = await res.json();
        setApplyData(data);
        setShowApplyData(true);
      } catch (err) {
        console.error(err);
        setApplyData([]);
        setShowApplyData(false);
      }
    }, 400);

    return () => clearTimeout(debounceTimeout.current);
  }, [search]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !(inputRef.current).contains(e.target)) {
        setShowApplyData(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const clearSearch = () => {
    setSearch('');
    setApplyData([]);
    setShowApplyData(false);
  };

  return (
    <div ref={inputRef} className="relative w-full max-w-md">
      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Experiments..."
          className="
            w-full py-2.5 px-10
            rounded-lg
            text-white
            bg-gray-700 dark:bg-zinc-900
            text-sm dark:text-white
            shadow-sm dark:shadow-md
            border border-gray-300 dark:border-zinc-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
            placeholder:text-gray-100 dark:placeholder:text-gray-500
            transition-all duration-300
          "
        />

        {/* Search Icon */}
        <div className="absolute left-3 top-2.5 text-gray-100 dark:text-gray-400 pointer-events-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Clear Button */}
        {search && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5 text-gray-100 dark:text-gray-400 hover:text-red-500 transition"
            aria-label="Clear search"
          >
            ✖
          </button>
        )}
      </div>

      {/* Suggestions */}
      {applyData.length > 0 && showApplyData && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
          {applyData.map((data) => (
            <Link
              key={data.ExperimentId}
              href={data.slug}
              onClick={clearSearch}
              className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all"
            >
              {data.ExperimentName}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
