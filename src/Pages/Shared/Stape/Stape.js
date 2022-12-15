import React from 'react';

const Step = () => {
	const nums=[1,2,3,4]
	return (
    <div className='mt-4'>
      <div className="flex justify-between  relative">
        {nums.map((num) => (
          <p
            key={num}
            className="w-8 h-8 flex items-center justify-center font-bold bg-purple-100 rounded-full"
          >
            {num}
          </p>
		))}
				<div className='h-1 top-1/2 bottom-1/2 -z-10 w-full absolute bg-purple-600'>
					
		</div>
      </div>
    </div>
  );
};

export default Step;