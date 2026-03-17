import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponent } from "./quartz/components/types"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.LinksHeader()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      LinkedIn: "https://www.linkedin.com/in/andreas-bock",
      GitHub: "https://github.com/andreasbock",
    },
  }),
}

export const recentPosts: QuartzComponent = 
  Component.DesktopOnly(Component.RecentNotes({
  title: "Recent posts",
  limit: 3,
  showTags: false,
  filter: (file) => { 
    return !!file.slug?.includes("🌍-Blog/");
  }
}))

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    recentPosts
  ],
  right: [
    Component.Search(),
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    recentPosts
  ],
  right: [
    Component.Search(),
    Component.Darkmode(),
  ],
}
