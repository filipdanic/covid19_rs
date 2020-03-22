import React from 'react';

export default ({ children }: { children: React.ReactChild }) =>
  <div className='alert'>
    <div className='alert-icon'>
      <svg className='alert-icon-svg' focusable='false' viewBox='0 0 24 24'
           aria-hidden='true' role='presentation'>
        <path d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z' />
      </svg>
    </div>
    <div className='alert-message'>
      {children}
    </div>
  </div>
