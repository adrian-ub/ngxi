import { Component, inject } from '@angular/core'
import { Router, RouterLink } from '@angular/router'

import { SearchBar } from './SearchBar'

@Component({
  selector: 'NavBar',
  imports: [RouterLink, SearchBar],
  template: `
  <nav class="dragging"
    flex="~ gap4 none"
    p4 relative bg-base z-10 border="b base" text-xl [class.md:hidden]="!showNav">
    @if(!isHomePage) {
      <a routerLink="/"  class="non-dragging"
        icon-button flex-none
        i-carbon:arrow-left></a>
    }

    @if(showNav){
      <div flex-auto></div>
      <h1
        absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center
        text-xl font-light tracking-2px pointer-events-none
      >
        Ngxi
      </h1>
      <a
        class="non-dragging"
        i-carbon-logo-github icon-button flex-none
        href="https://github.com/adrian-ub/ngxi"
        target="_blank"
        title="GitHub"
      ></a>
    }

    @if(true) {
      <SearchBar />
    }
</nav>
  `,
})
export class Navbar {
  private router = inject(Router)
  protected showNav = !this.router.url.startsWith('/collection')
  protected isHomePage = this.router.url === '/'
}
