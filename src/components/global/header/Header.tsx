import { ModeToggle } from '../../../mode-toggle'
import { useTheme } from '../../../themeContext'

const Header = () => {
  const {theme} = useTheme()
  return (
    <div className='h-[80px] w-full bg-accent'>
        <div className='flex justify-between'>
            <div className='ml-12 text-2xl mt-5 font-bold text-slate-300'>
                <h1>RE/<span style={{color:theme.primaryColor}}>UI</span></h1>
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>
    </div>
  )
}

export default Header