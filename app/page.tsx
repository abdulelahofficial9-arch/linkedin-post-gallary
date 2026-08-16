import MasonryGallery from "@/components/MasonryGallery";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-100 dark:bg-black">
      <header className="border-b border-black/10 bg-white dark:border-white/10 dark:bg-[#1b1f23]">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 sm:px-6">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-[#0a66c2] text-sm font-bold text-white">
            in
          </span>
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Post Gallery
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <MasonryGallery posts={posts} />
      </main>
    </div>
  );
}
