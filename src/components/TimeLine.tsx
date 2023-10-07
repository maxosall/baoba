import PostBox from './PostBox';
import PostCard from './postCards/PostCard';

const TimeLine = () => {
  return (
    <>
      <div className="col-span-2 ">
        <PostBox/>
        <div className="py-4 gap-6 flex flex-col">
          <PostCard Text="Directives are custom Tailwind-specific at-rules you can use in your CSS that offer special functionality for Tailwind CSS projects." />
          <PostCard Text="I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way." />
          <PostCard Text="Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system." />
          <PostCard Text="Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project." />
        </div>
      </div>
    </>
  );
}
export default TimeLine;