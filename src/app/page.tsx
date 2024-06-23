"use client";

import Hello from "../../components/hello.mdx";
import { MDXProvider } from "@mdx-js/react";

export default function Home() {
  return (
    <main className="bg-white min-h-screen p-12">
      <MDXProvider>
        <div className="prose prose-lg max-w-3xl p-4 mdx-style" >
          <Hello />
        </div>
      </MDXProvider>
    </main>
  );
}
