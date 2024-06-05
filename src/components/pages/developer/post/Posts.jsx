import {
  Archive,
  ArchiveRestore,
  ChevronDown,
  CircleGauge,
  FilePenLine,
  Menu,
  Plus,
  Trash,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <header className="bg-primary px-5 py-3  text-light border-b border-line">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center text-header">
            <Menu className="stroke-header" />
            Logo Here!!
          </div>
          <div className="avatar flex items-center gap-2">
            <img
              src="https://via.placeholder.com/50x50"
              alt=""
              className="size-9 rounded-full"
            />
            <ChevronDown className="stroke-header" size="16" />
          </div>
        </div>
      </header>
      <main className="main-wrapper flex  ">
        <nav className=" pt-3 h-[calc(100vh-60px)] w-[250px] border-r border-line ">
          <ul className="h-full">
            <li className="nav-link mb-2 nav-link-active">
              <Link
                to="/"
                className="text-sm p-3 flex gap-3 items-center leading-none  "
              >
                <CircleGauge size="12" /> Dashboard
              </Link>
            </li>
            <li className="nav-link mb-2">
              <Link
                to="/"
                className="text-sm p-3 flex gap-3 items-center leading-none "
              >
                <CircleGauge size="12" /> Post
              </Link>
            </li>
            <li className="nav-link mb-2">
              <Link
                to="/"
                className="text-sm p-3 flex gap-3 items-center leading-none "
              >
                <CircleGauge size="12" /> Pages
              </Link>
            </li>
            <li className="nav-link mb-2">
              <Link
                to="/"
                className="text-sm p-3 flex gap-3 items-center leading-none "
              >
                <CircleGauge size="12" /> Team
              </Link>
            </li>
            <li className="nav-link mb-2">
              <Link
                to="/"
                className="text-sm p-3 flex gap-3 items-center leading-none "
              >
                <CircleGauge size="12" /> Services
              </Link>
            </li>
            <li className="nav-link  mb-2">
              <Link
                to="/"
                className="text-sm p-3 flex gap-3 items-center leading-none "
              >
                <CircleGauge size="12" /> Portfolio
              </Link>
            </li>
          </ul>
        </nav>
        <div className="px-5 py-3 pb-1 grow flex flex-col h-[calc()]">
          <div className=" grow">
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="mb-0 font-sansRegular">Post</h2>
                <p className="text-xs text-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore, eos!
                </p>
              </div>
              <button className="flex items-center gap-2 text-[12px] bg-accent px-4 py-2 rounded-md relative after:absolute after:content-[''] after:top-[3px] after:left-1/2 after:-translate-x-1/2 after:h-1/3 after:bg-gradient-to-b after:from-[#ffffff1c] after:to-transparent after:w-[95%] after:rounded-[3px] hover:after:from-[#ffffff25] bg-opacity-90 border-1 border-accent hover:bg-opacity-70 ">
                <Plus size={14} /> Add
              </button>
            </div>

            <div className="table-wrapper  mt-10 rounded-md">
              <table>
                <thead>
                  <tr>
                    <th className="w-[30px] text-center">#</th>
                    <th>Title</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-[30px] text-center">1</td>
                    <td>Lorem ipsum dolor sit</td>
                    <td>
                      <ul className="table-action ">
                        <li>
                          <button>
                            <FilePenLine />
                          </button>
                        </li>

                        <li>
                          <button>
                            <Archive />
                          </button>
                        </li>

                        <li>
                          <button>
                            <ArchiveRestore />
                          </button>
                        </li>
                        <li>
                          <button>
                            <Trash />
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[30px] text-center">1</td>
                    <td>Lorem ipsum dolor sit</td>
                    <td>
                      <ul className="table-action ">
                        <li>
                          <button>
                            <FilePenLine />
                          </button>
                        </li>

                        <li>
                          <button>
                            <Archive />
                          </button>
                        </li>

                        <li>
                          <button>
                            <ArchiveRestore />
                          </button>
                        </li>
                        <li>
                          <button>
                            <Trash />
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="w-[30px] text-center">1</td>
                    <td>Lorem ipsum dolor sit</td>
                    <td>
                      <ul className="table-action ">
                        <li>
                          <button>
                            <FilePenLine />
                          </button>
                        </li>

                        <li>
                          <button>
                            <Archive />
                          </button>
                        </li>

                        <li>
                          <button>
                            <ArchiveRestore />
                          </button>
                        </li>
                        <li>
                          <button>
                            <Trash />
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="w-[30px] text-center">1</td>
                    <td>title ipsum dolor sit</td>
                    <td>
                      <ul className="table-action ">
                        <li>
                          <button>
                            <FilePenLine />
                          </button>
                        </li>

                        <li>
                          <button>
                            <Archive />
                          </button>
                        </li>

                        <li>
                          <button>
                            <ArchiveRestore />
                          </button>
                        </li>
                        <li>
                          <button>
                            <Trash />
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="w-[30px] text-center">1</td>
                    <td>Lorem ipsum dolor sit</td>
                    <td>
                      <ul className="table-action ">
                        <li>
                          <button>
                            <FilePenLine />
                          </button>
                        </li>

                        <li>
                          <button>
                            <Archive />
                          </button>
                        </li>

                        <li>
                          <button>
                            <ArchiveRestore />
                          </button>
                        </li>
                        <li>
                          <button>
                            <Trash />
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <footer className="border-t border-line border-opacity-40 opacity-20 flex justify-between py-1">
            <small className="text-[10px] uppercase font-sansThin">
              Count: 4
            </small>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Posts;
