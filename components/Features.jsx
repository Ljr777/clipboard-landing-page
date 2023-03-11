import React from "react";
import Link from "next/link";
const Features = () => {
  return (
    <div className="bg-red-200">
      <div>
        <div>
          <div>Keep track of your snippets</div>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
        <div className="md:flex-row">
          <div>image</div>
          <div>
            <div>
              <div>Quick Search</div>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.{" "}
              </p>
            </div>
            <div>
              <div>iCloud Sync</div>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div>
              <div>Complete History</div>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>Access Clipboard anywhere</div>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <div>imageeee</div>
      </div>
      {/* supercharge your workflow */}
      <div>
        <div>
          <div>Supercharge your workflow</div>
          <p>We’ve got the tools to boost your productivity.</p>
        </div>
        <div className="md:flex">
          <div>
            <div>Create blacklists</div>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>
          <div>
            <div>Plain text snippets</div>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div>
            <div>Sneak preview</div>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
