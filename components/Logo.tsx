import React from 'react'
import { SwitchCamera } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

function Logo() {
  return (
    <Link
        href= {"/dashboard"}
        className={buttonVariants({
            className: "hidden md:flex navLink !mb-10 lg:hover:bg-transparent",
            variant: "ghost",
            size: "lg"


        })}
    
    
    >

        <p className={"font-semibold text-xl hidden lg:block"}>WhereWeGo</p>
    
    </Link>



  )
}

export default Logo