import React ,{useState} from 'react'

const Nav = () => {

    const  [isOpen, toggleOpen ] = useState(false);

    function openUp (){
        // toggleOpen(isOpen = true);
        alert("im open");
    }
    function closeUp (){
        toggleOpen(isOpen = false)
    }
  return (
    <div>
        <div>
            <div className='flex items-center justify-center'>
            <button onClick={openUp} className='px-4 text-white bg-black absolute bottom-12 duration-500 hover:scale-110 active:scale-90'>
             See More
            </button>

            </div>
        </div>
    </div>
  )
}

export default Nav