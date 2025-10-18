import React, { Suspense } from 'react';
import Category from './Category';

const Leftaside = () => {
    return (
        <div>
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
              <Category></Category>
          </Suspense>
        </div>
    );
};

export default Leftaside;