import type { Post } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function MasonryGallery({ posts }: { posts: Post[] }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
