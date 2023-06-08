import React, {Suspense , lazy} from "react";

// dynamic import of Cat component
const Cat = lazy(()=> import('../../components/Cat'))

const GeneralApp = () => {

  return (
    <>
    {/* this would wrapped in the suspense component */}
      <Suspense fallback="Loading......">
        <Cat />
      </Suspense>
    </>
  );
};

export default GeneralApp;
