import React from "react";
import Link from "next/link";
import Image from "next/image";
const Features = () => {
  return (
    <div className="mt-24 text-center text-[#9fabb2]">
      <div>
        <div>
          <div className="font-bold text-3xl text-[#4c545d]">
            Keep track of your snippets
          </div>
          <p className="mt-6 text-[#9fabb2]">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="mt-16">
            <Image
              src="/static/images/image-computer.png"
              width="300"
              height="400"
            />
          </div>
          <div className="mt-16 flex flex-col gap-y-10">
            <div>
              <div className="font-bold text-2xl text-[#4c545d]">
                Quick Search
              </div>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.{" "}
              </p>
            </div>
            <div>
              <div className="font-bold text-2xl text-[#4c545d]">
                iCloud Sync
              </div>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div>
              <div className="font-bold text-2xl text-[#4c545d]">
                Complete History
              </div>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48 flex flex-col items-center">
        <div className="font-bold text-3xl text-[#4c545d]">
          Access Clipboard Anywhere
        </div>
        <p className="mt-6">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <div>
          <Image
            className="mt-16"
            src="/static/images/image-devices.png"
            width="300"
            height="400"
          />
        </div>
      </div>
      {/* supercharge your workflow */}
      <div className="mt-24">
        <div>
          <h2 className="font-bold text-3xl text-[#4c545d]">
            Supercharge your workflow
          </h2>
          <p className="mt-6">
            We’ve got the tools to boost your productivity.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-y-12">
          <div className="flex flex-col items-center">
            <Image
              src="/static/images/icon-blacklist.svg"
              width="50"
              height="50"
            />
            <h2 className="mt-12 text-[#4c545d] text-2xl font-bold">
              Create blacklists
            </h2>
            <p className="">
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/static/images/icon-text.svg" width="50" height="50" />
            <h2 className="mt-12 text-[#4c545d] text-2xl font-bold">
              Plain text snippets
            </h2>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/static/images/icon-preview.svg"
              width="50"
              height="50"
            />
            <h2 className="mt-12 text-[#4c545d] text-2xl font-bold">
              Sneak preview
            </h2>
            <p>
              Quick preview of all snippets on yourClipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
