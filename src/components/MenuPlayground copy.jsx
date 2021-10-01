// import './menu/menu.css'
// import { ReactComponent as CaretIcon } from './icons/caret.svg';
// import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';

// import React, { useState, useEffect, useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';

// function Menu() {
//   return (
//     <Navbar>
//       <NavItem icon={<CaretIcon />}>
//         <DropdownMenu></DropdownMenu>
//       </NavItem>
//     </Navbar>
//   );
// }

// function Navbar(props) {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-nav">{props.children}</ul>
//     </nav>
//   );
// }

// function NavItem(props) {
//   const [open, setOpen] = useState(false);

//   return (
//     <li className="nav-item">
//       <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
//         {props.icon}
//       </a>

//       {open && props.children}
//     </li>
//   );
// }

// function DropdownMenu() {
//   const [activeMenu, setActiveMenu] = useState('main');
//   const [menuHeight, setMenuHeight] = useState(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
//   }, [])

//   function calcHeight(el) {
//     const height = el.offsetHeight;
//     setMenuHeight(height);
//   }

//   function DropdownItem(props) {
//     return (
//       <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
//         <span className="icon-button">{props.leftIcon}</span>
//         {props.children}
//         <span className="icon-right">{props.rightIcon}</span>
//       </a>
//     );
//   }

//   return (
//     <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

//       <CSSTransition
//         in={activeMenu === 'main'}
//         timeout={500}
//         classNames="menu-primary"
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem>Componentes</DropdownItem>
//           <DropdownItem
//             leftIcon={<BoltIcon />}
//             rightIcon={<ChevronIcon />}
//             goToMenu="freecode">
//             Freecode
//           </DropdownItem>
//           <DropdownItem
//             leftIcon={<BoltIcon />}
//             rightIcon={<ChevronIcon />}
//             goToMenu="datepicker">
//             Datepicker
//           </DropdownItem>

//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={activeMenu === 'freecode'}
//         timeout={500}
//         classNames="menu-secondary"
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>Freecode</h2>
//           </DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>MyComponent</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>TypesOfFood</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>ToDo</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>Override</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>Access</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>UsePropTypes</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>PropsWithStateless</DropdownItem>
//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={activeMenu === 'datepicker'}
//         timeout={500}
//         classNames="menu-secondary"
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>Datepicker</h2>
//           </DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>Calendar Default</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>Calendar Inline</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}><a href="#">Custom DatePicker</a></DropdownItem>
//         </div>
//       </CSSTransition>
//     </div>
//   );
// }

// export default Menu;