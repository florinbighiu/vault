import UploadForm from "@/pages/UploadForm";

export default function SideNav() {
  return (
    <nav
      id="default-sidebar"
      className="bg-transparent flex flex-row justify-start items-start border-t transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar">
      <div className="px-3 flex flex-row justify-between w-full py-4 overflow-y-auto">
        <ul className="space-y-2 flex flex-row items-start justify-start m-2 font-medium">
          <li>
            <a
              href=""
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Files</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4037 20.8018C14.0282 19.9702 20 16.5681 20 11.5C20 7 16.2667 4 12 4C7.87627 4 4 7 4 11.5C4 16.5681 9.97178 19.9702 11.5963 20.8018C11.8532 20.9334 12.1468 20.9334 12.4037 20.8018ZM11.7687 14.7565L8.97014 11.8107C8.3998 11.2103 8.31058 10.2991 8.75365 9.5995C9.49154 8.43441 11.2101 8.4922 11.868 9.70422L11.9376 9.83247C11.9645 9.88195 12.0355 9.88195 12.0624 9.83247L12.132 9.70422C12.7899 8.4922 14.5085 8.43441 15.2463 9.5995C15.6894 10.2991 15.6002 11.2103 15.0299 11.8107L12.2313 14.7565C12.1386 14.8541 12.0922 14.9029 12.0359 14.9142C12.0122 14.919 11.9878 14.919 11.9641 14.9142C11.9078 14.9029 11.8614 14.8541 11.7687 14.7565Z"
                  fill="#758CA3"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Favorites</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                viewBox="-2 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 3C5 1.34315 6.34315 0 8 0H12C13.6569 0 15 1.34315 15 3H17C18.6569 3 20 4.34315 20 6C20 6.55228 19.5523 7 19 7H1C0.44772 7 0 6.55228 0 6C0 4.34315 1.34315 3 3 3H5zM2 9H18C18.5523 9 19 9.44771 19 10V21C19 22.6569 17.6569 24 16 24H4C2.34315 24 1 22.6569 1 21V10C1 9.44771 1.44772 9 2 9zM5 13.1429V18.8571C5 19.4883 5.44772 20 6 20C6.55228 20 7 19.4883 7 18.8571V13.1429C7 12.5117 6.55228 12 6 12C5.44772 12 5 12.5117 5 13.1429zM9 13.1429V18.8571C9 19.4883 9.4477 20 10 20C10.5523 20 11 19.4883 11 18.8571V13.1429C11 12.5117 10.5523 12 10 12C9.4477 12 9 12.5117 9 13.1429zM13 13.1429V18.8571C13 19.4883 13.4477 20 14 20C14.5523 20 15 19.4883 15 18.8571V13.1429C15 12.5117 14.5523 12 14 12C13.4477 12 13 12.5117 13 13.1429zM8 2C7.44772 2 7 2.44772 7 3H13C13 2.44772 12.5523 2 12 2H8z"
                  fill="#758CA3"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Trash</span>
            </a>
          </li>
        </ul>
        <UploadForm />
      </div>
    </nav>
  );
}
