import React from 'react';
import Clock from './Clock';

function Box() {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="rounded-md bg-gray-100 p-4 shadow-xl shadow-neutral-300 dark:shadow-neutral-900 dark:bg-neutral-700">
        <div className="mx-8">
          <div className="grid">
            <div>
              <Clock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
