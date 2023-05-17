import React from 'react'
import { SearchOutlined ,HomeOutlined,LogoutOutlined,ShoppingCartOutlined,LineChartOutlined ,CopyOutlined,UserOutlined} from '@ant-design/icons';
import { Badge, Input } from 'antd';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='border-b mb-6'>
        <header className='px-4 py-6 flex justify-between items-center gap-10'>
            <div className="logo">
                <a href="">
                    <h2 className='text-2xl font-sans md:text-4xl'>
                        LOGO
                    </h2>
                </a>
            </div>
            <div className="header-search flex-1">
            <Input className='rounded-3xl ' size="large" placeholder="large size" prefix={<SearchOutlined />} />
            </div>
            <div className="menu-links flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1 ">
            <Link to="/" className='menu-link flex flex-col'>
                 <HomeOutlined className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Anasayfa</span>
                </Link>
                <Badge className='md:flex hidden' count={5} offset={[0,6]}>
                <Link to="/cart" className='menu-link flex flex-col'>
                 <ShoppingCartOutlined  className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Sepet</span>
                </Link>
                </Badge>
                <Link to="/bills" className='menu-link flex flex-col'>
                 <CopyOutlined className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Fatura</span>
                </Link>
                <Link to="/customers" className='menu-link flex flex-col'>
                 <UserOutlined  className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Müşteriler</span>
                </Link>
                <Link to="/statistic" className='menu-link flex flex-col'>
                 <LineChartOutlined  className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>İstatistikler</span>
                </Link>
                <a href="/" className='menu-link flex flex-col'>
                 <LogoutOutlined  className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Çıkış</span>
                </a>
            </div>
            <Badge className='md:hidden flex ' count={5} offset={[0,6]}>
                <a href="/" className='menu-link flex flex-col'>
                 <ShoppingCartOutlined  className='text-2xl' />
                    <span className='md:text-xs text-[10px]'>Sepet</span>
                </a>
                </Badge>
        </header>
    </div>
  )
}

export default Header