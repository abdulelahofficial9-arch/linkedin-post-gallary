import Image from "next/image";
import type { Post } from "@/lib/posts";
import {
  CommentIcon,
  GlobeIcon,
  MoreIcon,
  RepostIcon,
  SendIcon,
  ThumbsUpIcon,
} from "@/components/Icons";

function formatCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(count % 1000 >= 100 ? 1 : 0)}K`;
  }
  return `${count}`;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="break-inside-avoid rounded-lg border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#1b1f23]">
      <div className="flex items-start gap-2.5 p-3.5 pb-2.5">
        <Image
          src={`https://i.pravatar.cc/150?img=${post.avatarSeed}`}
          alt={post.authorName}
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            {post.authorName}
          </p>
          <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
            {post.authorTitle}
          </p>
          <p className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            {post.timeAgo}
            <GlobeIcon className="h-3 w-3" />
          </p>
        </div>
        <button
          type="button"
          aria-label="More options"
          className="rounded-full p-1.5 text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/10"
        >
          <MoreIcon className="h-4 w-4" />
        </button>
      </div>

      <p className="whitespace-pre-line px-3.5 pb-3 text-sm leading-6 text-zinc-800 dark:text-zinc-200">
        {post.text}
      </p>

      {post.image && (
        <div
          className="relative flex w-full items-end overflow-hidden"
          style={{ aspectRatio: post.image.aspect }}
        >
          <Image
            src={`https://picsum.photos/seed/${post.image.seed}/800/800`}
            alt={post.image.label}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="relative z-10 w-full bg-black/25 px-3.5 py-2 text-xs font-medium text-white">
            {post.image.label}
          </span>
        </div>
      )}

      <div className="flex items-center justify-between px-3.5 pt-2.5 text-xs text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-1">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0a66c2] text-white">
            <ThumbsUpIcon className="h-2.5 w-2.5" />
          </span>
          {formatCount(post.reactions)}
        </span>
        <span>
          {formatCount(post.comments)} comments · {formatCount(post.reposts)} reposts
        </span>
      </div>

      <div className="mx-3.5 mt-2.5 border-t border-black/10 dark:border-white/10" />

      <div className="flex items-center justify-between px-1.5 py-1 text-zinc-600 dark:text-zinc-300">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-2.5 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10"
        >
          <ThumbsUpIcon className="h-4 w-4" />
          Like
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-2.5 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10"
        >
          <CommentIcon className="h-4 w-4" />
          Comment
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-2.5 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10"
        >
          <RepostIcon className="h-4 w-4" />
          Repost
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1.5 rounded px-2 py-2.5 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10"
        >
          <SendIcon className="h-4 w-4" />
          Send
        </button>
      </div>
    </article>
  );
}
