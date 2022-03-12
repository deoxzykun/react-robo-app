import React from 'react';

const InputSearch = ({searchChange}) => {
    return(
        <div>
            <input 
                placeholder='search robots'
                type='search'
                className='pa3 ba b--green bg-lightest-blue'
                onChange={searchChange}
            />
        </div>
    );
}

export default InputSearch;