import { Moon, Sun } from "lucide-react"
import { Button } from "../@/components/ui/button"
import { DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger, } from "@radix-ui/react-dropdown-menu"
import { useTheme } from "./themeContext"

export function ModeToggle() {
  const { changeTheme } = useTheme()
  const {theme} = useTheme()

  return (
    <div className="mt-5 mr-12">
<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
          <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only text-primary">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" >
        <DropdownMenuItem onClick={() => changeTheme(1)} className="hover:cursor-pointer" style={{color:theme.ring}}>
          Neutral
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme(2)} className="hover:cursor-pointer"style={{color:theme.ring}}>
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme(3)} className="hover:cursor-pointer"style={{color:theme.ring}}>
          Pink
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme(4)} className="hover:cursor-pointer" style={{color:theme.ring}}>
          Yellow
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    
  )
}
