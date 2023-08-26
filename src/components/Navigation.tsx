export const Navigation: React.FC = () => {
  return (

    <nav className='fixed z-20 inset-0 top-10 left-0 w-[10rem] pb-10 pl-8 pr-6 overflow-y-auto'>
      <ul>
        <li className='text-lg font-medium p-2 pt-0'><a href='#buttons'>Buttons</a></li>
        <li className='text-lg font-medium p-2'><a href='#inputs'>Inputs</a></li>
      </ul>
    </nav>
  )
}
