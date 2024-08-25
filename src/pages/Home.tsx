import { useState } from "react";
import Chat from "../assets/Chat.png";
import More from "../assets/More.svg";
import Profile from "../assets/Profile.png";
import Profile2 from "../assets/Profile2.png";
import Emoji from "../assets/Emoji.png";
import Emoji2 from "../assets/Emoji2.png";
import Message from "../assets/Message.svg";
import Modal from "../components/Modal";

interface PostData {
  name: string;
  profile: string;
  time: string;
  post: string;
  comment: number;
  edited: boolean;
  emoji: string;
}

const postData: PostData[] = [
  {
    name: "Theresa Webb",
    profile: Profile,
    time: "5mins ago",
    post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comment: 24,
    edited: false,
    emoji: Emoji,
  },
  {
    name: "Marvin McKinney",
    profile: Profile2,
    time: "8mins ago",
    post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comment: 20,
    edited: true,
    emoji: Emoji2,
  },
];

function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center px-[12px]">
        {/* Comment: Given padding for small screen */}
        <div className="w-full max-w-[768px]">
          <div className="mt-[69px] text-[28px] leading-[33.89px] font-[500] text-[#C5C7CA]">
            Hello Jane
          </div>
          <div className="mt-[12px] text-[16px] leading-[24px] text-[#7F8084] max-w-[580px]">
            How are you doing today? Would you like to share something with the
            community 🤗
          </div>

          <div
            className="mt-[40px] bg-[#27292D] border-[2px] border-[#35373B] rounded-[8px] px-[20px] py-[24px] cursor-pointer"
            onClick={openModal}
          >
            <div className="text-[18px] leading-[21.78px] text-[#C5C7CA] font-[500]">
              Create Post
            </div>
            <div className="bg-[#191920] rounded-[8px] p-[15px] flex items-center mt-[16px]">
              <div className="h-[48px] w-[48px] rounded-full bg-[#27292D] flex justify-center items-center">
                <img src={Chat} className="w-[18px] h-[18px]" alt="Chat" />
              </div>
              <div className="text-[16px] leading-[16px] text-[#7F8084] ml-[16px]">
                How are you feeling today?
              </div>
            </div>
            <div className="flex justify-end mt-[16px]">
              <button className="bg-[#4A96FF] text-[16px] leading-[19.36px] font-[500] text-[white] rounded-[4px] w-[111px] p-[12px] text-center">
                Post
              </button>
            </div>
          </div>

          {postData.map((post, key) => (
            <div
              className="my-[16px] bg-[#27292D] border-[2px] border-[#35373B] rounded-[8px] px-[20px] py-[24px] cursor-pointer"
              key={key}
              onClick={openModal}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={post.profile}
                    alt="Profile"
                    className="h-[44px] w-[44px]"
                  />
                  <div className="ml-[16px]">
                    <div className="text-[16px] font-[500] leading-[19.36px] text-[#C5C7CA]">
                      {post.name}
                    </div>
                    <div className="text-[14px] leading-[16.94px] text-[#7F8084] mt-[4px]">
                      {post.time}
                      {post.edited && <span> • Edited</span>}
                    </div>
                  </div>
                </div>
                <img src={More} alt="More" className="w-[20px] h-[20px]" />
              </div>
              <div className="bg-[#191920] p-[15px] mt-[20px] rounded-[8px] flex">
                <div className="h-[48px] w-[48px] rounded-full bg-[#27292D] flex justify-center items-center">
                  <img
                    src={post.emoji}
                    className="w-[18px] h-[18px]"
                    alt="Chat"
                  />
                </div>
                <div className="text-[16px] leading-[24px] text-[#7F8084] ml-[16px] flex-1">
                  {post.post}
                </div>
              </div>
              <div className="mt-[12px] flex items-center">
                <img src={Message} alt="Message" className="w-[20] h-[20]" />
                <div className="text-[#7F8084] text-[14px] font-[500] leading-[16.94px] ml-[8px]">
                  {post.comment} comments
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
}

export default Home;
