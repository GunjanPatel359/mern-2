// import React from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'

// eslint-disable-next-line react/prop-types
const NavBar = ({active}) => {
  return (
    <>
    <div className={`${styles.noramlFlex}`}>
        {
            navItems && navItems.map((i,index)=>(
                <div className='flex' key={index}>
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#17dd1f]":"text-[#fff]"} font-[500] px-6 cursor-pointer`}
                    >
                        {i.title}
                    </Link>
                </div>
            ))
        }
    </div>
        </>
  )
}

export default NavBar
