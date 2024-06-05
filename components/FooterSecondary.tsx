import React from "react";
import Link from "next/link";

function FooterSecondary() {
  return (
    <footer className=" text-black py-10 text-sm border-t-2 mt-20" >
      <div className="container mx-auto px-6  flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="w-full lg:w-auto lg:mr-auto">
          <h2 className="md:my-4 text-xl font-normal">PhilanthroLink</h2>
          <div className="flex flex-column md:mt-16"> 
          {/* <!-- Facebook Icon--> */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10.04C14.5 10.04 10 14.53 10 20.06C10 25.06 13.66 29.21 18.44 29.96V22.96H15.9V20.06H18.44V17.85C18.44 15.34 19.93 13.96 22.22 13.96C23.31 13.96 24.45 14.15 24.45 14.15V16.62H23.19C21.95 16.62 21.56 17.39 21.56 18.18V20.06H24.34L23.89 22.96H21.56V29.96C23.9164 29.5878 26.0622 28.3855 27.6099 26.57C29.1576 24.7546 30.0054 22.4456 30 20.06C30 14.53 25.5 10.04 20 10.04Z" fill="#828282"/>
</svg>

          {/* <!-- Linkedin Icon--> */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 11C27.5304 11 28.0391 11.2107 28.4142 11.5858C28.7893 11.9609 29 12.4696 29 13V27C29 27.5304 28.7893 28.0391 28.4142 28.4142C28.0391 28.7893 27.5304 29 27 29H13C12.4696 29 11.9609 28.7893 11.5858 28.4142C11.2107 28.0391 11 27.5304 11 27V13C11 12.4696 11.2107 11.9609 11.5858 11.5858C11.9609 11.2107 12.4696 11 13 11H27ZM26.5 26.5V21.2C26.5 20.3354 26.1565 19.5062 25.5452 18.8948C24.9338 18.2835 24.1046 17.94 23.24 17.94C22.39 17.94 21.4 18.46 20.92 19.24V18.13H18.13V26.5H20.92V21.57C20.92 20.8 21.54 20.17 22.31 20.17C22.6813 20.17 23.0374 20.3175 23.2999 20.5801C23.5625 20.8426 23.71 21.1987 23.71 21.57V26.5H26.5ZM14.88 16.56C15.3256 16.56 15.7529 16.383 16.0679 16.0679C16.383 15.7529 16.56 15.3256 16.56 14.88C16.56 13.95 15.81 13.19 14.88 13.19C14.4318 13.19 14.0019 13.3681 13.685 13.685C13.3681 14.0019 13.19 14.4318 13.19 14.88C13.19 15.81 13.95 16.56 14.88 16.56ZM16.27 26.5V18.13H13.5V26.5H16.27Z" fill="#828282"/>
</svg>

{/* <!-- Youtube Icon--> */}
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 23L23.19 20L18 17V23ZM29.56 15.17C29.69 15.64 29.78 16.27 29.84 17.07C29.91 17.87 29.94 18.56 29.94 19.16L30 20C30 22.19 29.84 23.8 29.56 24.83C29.31 25.73 28.73 26.31 27.83 26.56C27.36 26.69 26.5 26.78 25.18 26.84C23.88 26.91 22.69 26.94 21.59 26.94L20 27C15.81 27 13.2 26.84 12.17 26.56C11.27 26.31 10.69 25.73 10.44 24.83C10.31 24.36 10.22 23.73 10.16 22.93C10.09 22.13 10.06 21.44 10.06 20.84L10 20C10 17.81 10.16 16.2 10.44 15.17C10.69 14.27 11.27 13.69 12.17 13.44C12.64 13.31 13.5 13.22 14.82 13.16C16.12 13.09 17.31 13.06 18.41 13.06L20 13C24.19 13 26.8 13.16 27.83 13.44C28.73 13.69 29.31 14.27 29.56 15.17Z" fill="#828282"/>
</svg>

{/* <!-- Instagram Icon--> */}
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8 10H24.2C27.4 10 30 12.6 30 15.8V24.2C30 25.7383 29.3889 27.2135 28.3012 28.3012C27.2135 29.3889 25.7383 30 24.2 30H15.8C12.6 30 10 27.4 10 24.2V15.8C10 14.2617 10.6111 12.7865 11.6988 11.6988C12.7865 10.6111 14.2617 10 15.8 10ZM15.6 12C14.6452 12 13.7295 12.3793 13.0544 13.0544C12.3793 13.7295 12 14.6452 12 15.6V24.4C12 26.39 13.61 28 15.6 28H24.4C25.3548 28 26.2705 27.6207 26.9456 26.9456C27.6207 26.2705 28 25.3548 28 24.4V15.6C28 13.61 26.39 12 24.4 12H15.6ZM25.25 13.5C25.5815 13.5 25.8995 13.6317 26.1339 13.8661C26.3683 14.1005 26.5 14.4185 26.5 14.75C26.5 15.0815 26.3683 15.3995 26.1339 15.6339C25.8995 15.8683 25.5815 16 25.25 16C24.9185 16 24.6005 15.8683 24.3661 15.6339C24.1317 15.3995 24 15.0815 24 14.75C24 14.4185 24.1317 14.1005 24.3661 13.8661C24.6005 13.6317 24.9185 13.5 25.25 13.5ZM20 15C21.3261 15 22.5979 15.5268 23.5355 16.4645C24.4732 17.4021 25 18.6739 25 20C25 21.3261 24.4732 22.5979 23.5355 23.5355C22.5979 24.4732 21.3261 25 20 25C18.6739 25 17.4021 24.4732 16.4645 23.5355C15.5268 22.5979 15 21.3261 15 20C15 18.6739 15.5268 17.4021 16.4645 16.4645C17.4021 15.5268 18.6739 15 20 15ZM20 17C19.2044 17 18.4413 17.3161 17.8787 17.8787C17.3161 18.4413 17 19.2044 17 20C17 20.7956 17.3161 21.5587 17.8787 22.1213C18.4413 22.6839 19.2044 23 20 23C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20C23 19.2044 22.6839 18.4413 22.1213 17.8787C21.5587 17.3161 20.7956 17 20 17Z" fill="#828282"/>
</svg>

</div>
          <br />
        </div>
        <div className="mb-8 lg:mb-0 w-full lg:w-auto mr-20">
          <h2 className="mb-4 font-medium text-base">About Us</h2>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-primary text-black"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-primary text-black"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-primary text-black"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default FooterSecondary;