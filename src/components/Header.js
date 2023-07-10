import logo from '../images/userlogo.png'

const Header = () => {
    return (
        <>
            <header className="bg-gray-800 py-4 px-8 fixed z-10 w-full flex justify-between h-20 items-center">
                <h1 className="text-white text-base font-mono">Account Aggregator</h1>
                <div className="flex items-center">
                    <img src={logo} alt="User Logo" className="w-8 h-8 rounded-full" />
                </div>
            </header>
        </>
    )
}

export default Header;