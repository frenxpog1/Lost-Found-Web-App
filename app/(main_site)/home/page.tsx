import Link from 'next/link';
import { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import PostFeed from '@/app/ui/home/postFeed';
import UsernameDisplay from '@/app/lib/getUsername';
import ProtectedRoute from '@/app/lib/ProtectedRoute';
import Announcements from '@/app/ui/announcement/announcements';
import { PlusIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Homepage',
};
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Homepage() {

  return (
    <ProtectedRoute>
      <div className={`${inter.className} mt-40 md:mt-[70px] grid grid-rows-1 lg:grid-cols-5 xl:grid-cols-12`}>

        {/* Feed Header */}
        <div className="flex w-full pt-8 px-8 pb-4 z-10 fixed top-[75px] bg-white justify-end xl:right-80 xl:w-[58%] xl:pb-8 xl:top-[65px]">
          <div className="p-1 rounded-md border border-red-500 text-red-500">
            <button className="flex font-normal text-sm text-nowrap items-center">
              <PlusIcon className="mx-1 w-5" />
              Add Post
            </button>
          </div>
        </div>

        {/* SideNav (Large Screen Only) */}
        <div className="hidden lg:block ml-8 fixed z-10 lg:top-24 xl:top-24">
          <span className="font-semibold text-2xl text-red-500">Dashboard</span>
          <ul className="mt-4 mb-8">
            <li>
              <Link href={'/home'}><UsernameDisplay /></Link>
            </li>
            <li>
              <Link href={'/home'}>BSCS - 2</Link>
            </li>
          </ul>

          <ul className="space-y-3 font-medium text-gray-500">
            <li className="hover:text-red-500">
              <Link href={'/home'}>Home</Link>
            </li>
            <li className="hover:text-red-500">
              <Link href={'/home'}>Chats</Link>
            </li>
            <li className="hover:text-red-500">
              <Link href={'/home'}>My Post</Link>
            </li>
            <li className="hover:text-red-500">
              <Link href={'/home'}>Saved</Link>
            </li>
            <li className="hover:text-red-500">
              <Link href={'/home'}>Archives</Link>
            </li>
          </ul>
        </div>

        {/* Post Content */}
        <div className="lg:col-span-4 lg:col-start-2 xl:col-span-7 xl:col-start-3">
          <div className="md:mt-24">
            < PostFeed />
          </div>
        </div>

        {/* Announcements Section */}
        <div className="hidden xl:block">
          <div className="fixed lg:mt-24 lg:top-32 xl:top-0 xl:z-30">
            <Announcements />
          </div>
        </div>

      </div>
    </ProtectedRoute>
  );
}



