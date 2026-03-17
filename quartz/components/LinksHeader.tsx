
import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

export default (() => {
  function LinksHeader() {
    return (
      <div id="links-header-container">
        <div id="links-header">  
            <a class="links-header-item" href="/📝-CV"> 📝 CV</a>   
            <a class="links-header-item" href="/📂-Research"> 📂 Research</a>  
            <a class="links-header-item" href="/🌍-Blog/"> 🌍 Blog</a>         
            <a class="links-header-item" href="/📚-Resources/"> 📚 Resources</a>
            <a class="links-header-item" href="/tags/"> 🔖 Tags</a>
        </div>
        <hr></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor