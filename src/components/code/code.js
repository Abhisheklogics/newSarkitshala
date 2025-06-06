'use client';

import React, { useRef, useState, useEffect } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl'; // ✅ use available theme

import { res, esp, ard } from '../../../code';

const CodeBox = ({ language = 'cpp', num, exNam }) => {
  const [buttonText, setButtonText] = useState('Copy');
  const codeRef = useRef(null);
  const timeoutRef = useRef(null);

  let code = '';
  if (exNam === 'Raspberry') code = res[num - 1];
  else if (exNam === 'esp') code = esp[num - 1];
  else if (exNam === 'ard') code = ard[num - 1];

  const handleCopy = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(code).then(() => {
        setButtonText('Copied!');
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setButtonText('Copy'), 2000);
      });
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="relative w-full max-w-full">
      <button
        onClick={handleCopy}
        className="absolute right-4 top-4 z-10 flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded shadow-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-6-8h6a2 2 0 012 2v12a2 2 0 01-2 2h-6a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
        <span>{buttonText}</span>
      </button>

      <div
        ref={codeRef}
        className="mt-12 rounded-md border bg-zinc-900 text-sm overflow-auto max-h-[500px] font-mono"
      >
        <Highlight {...defaultProps} code={code} language={language} theme={theme}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} p-4`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  <span className="opacity-50 pr-4 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBox;
