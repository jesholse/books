
import { getCollection } from "astro:content";
import PaginationEntry from "../../components/PaginationEntry.astro";
const blogPosts = await getCollection("blog");
export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      data: blogPosts,
    })
  );
}

export async function POST({ params, request }) {
  const data = await request.formData()
  const query = data.get("search")
  const sorted = blogPosts.filter(post => post.data.title.includes(query))
  
  return new Response(sorted.map((post)=>{
       return `<article class=" p-4  bg-slate-50 rounded-2xl ">
       <div class=" text-black text-2xl font-medium">
           <h1 transition:name="title-${post.slug}" >${post.data.title}</h1>
       </div>
       <div class="py-4 flex flex-col justify-center gap-8 items-start entry-content">
           <div class="text-md excerpt line-clamp-3">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia expedita doloremque repellendus voluptate unde illum nulla. 
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia expedita doloremque repellendus voluptate unde illum nulla.
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia expedita doloremque repellendus voluptate unde illum nulla.
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia expedita doloremque repellendus voluptate unde illum nulla.
           </div>
           <a href=/posts/${post.slug} class="border-2 rounded-lg p-1 px-2 border-purple-600 text-purple-600">Läs mer</a>
       </div>
   </article>`
  }).join(" ")
  )
}

//<PaginationEntry title={post.data.title} author={post.data.author} date={post.data.publishDate} slug={post.slug}></PaginationEntry>