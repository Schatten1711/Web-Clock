import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center pt-60 pb-10">
      <h1 className="text-sm dark:text-neutral-50">Made By Jack Saunders</h1>
      <p className="text-xs font-light dark:text-neutral-50">
        My Github:{' '}
        <a
          href="https://github.com/Schatten1711"
          target="_blank"
          rel="noreferrer noopener">
          Schatten1711
        </a>{' '}
      </p>
    </div>
  );
}

export default Footer;
