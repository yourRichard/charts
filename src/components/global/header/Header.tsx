import { ModeToggle } from '../../../mode-toggle'

const Header = () => {
  return (
    <div className='h-[80px] w-full bg-accent'>
        <div className='flex justify-between'>
            <div className='ml-12 text-2xl mt-5 font-bold text-primary'>
                <h1>RE/<span className='text-destructive'>UI</span></h1>
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>
    </div>
  )
}

export default Header