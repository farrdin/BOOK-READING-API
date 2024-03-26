import { CiLocationOn } from "react-icons/ci";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import Book from "../../assets/images/Book.png";

const ListedBooks = () => {
  return (
    <div>
      <div className="rounded-2xl bg-[#1313130D] py-8 text-center">
        <h2 className="text-[#131313] text-3xl font-bold ">Books</h2>
      </div>
      <div className="text-center my-5">
        <select className="select bg-[#23BE0A] text-white">
          <option disabled selected className="bg-white text-black">
            Sort By
          </option>
          <option className="bg-white text-black">Rating</option>
          <option className="bg-white text-black">Number of pages</option>
          <option className="bg-white text-black">Published year</option>
        </select>
      </div>
      <div className="BooksSection my-5">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-5"
          >
            <div className="border rounded-2xl p-10   lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className="border rounded-2xl p-10   lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-10  lg:flex gap-10">
              <div className="border p-6 rounded-xl flex justify-center bg-[#F3F3F3]">
                <img src={Book} alt="" />
              </div>
              <div className="w-full space-y-5">
                <div>
                  <h1 className="text-[#131313] text-2xl font-bold">
                    The Catcher in the Rye
                  </h1>
                  <p className="text-[#131313CC] text-base font-medium">
                    By : Awlad Hossain
                  </p>
                </div>
                <div className=" space-x-1 space-y-4 text-[#23BE0A] text-base font-medium">
                  <span className="text-black">Tag: </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl ">
                    #Young Adult
                  </span>
                  <span className="bg-[#23BE0A0D] p-2 rounded-2xl">
                    #Identity
                  </span>
                  <div className=" inline-block">
                    <div className="flex items-center text-black">
                      <CiLocationOn /> <span>Year of Publishing: 1924</span>
                    </div>
                  </div>
                  <div className="text-black flex gap-3">
                    <span className="flex items-center gap-1">
                      <GoPeople /> Publisher: Scribner
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineInsertPageBreak /> Page 192
                    </span>
                  </div>
                </div>
                <hr />
                <div className=" flex gap-2 ">
                  <span className="px-4 py-1 bg-[#328EFF26] text-[#328EFF] text-base font-normal rounded-full">
                    Category: Classic
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#FFAC3326] text-[#FFAC33] text-base font-normal ">
                    Rating: 4.5
                  </span>
                  <span className="px-4 py-1 rounded-full bg-[#23BE0A] text-[white] text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
