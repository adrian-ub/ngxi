import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlayListFavourite02Icon],svg[hugeicons-play-list-favourite-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.5 12.5v-1.45c0-4.03 0-6.046-1.252-7.298S16.98 2.5 12.95 2.5h-1.9c-4.03 0-6.046 0-7.298 1.252S2.5 7.02 2.5 11.05v1.9c0 4.03 0 6.046 1.252 7.298S7.02 21.5 11.05 21.5h1.45"></svg:path><svg:path d="M15.452 15.859c1.005-.594 1.883-.355 2.41.027c.216.156.324.234.388.234s.172-.078.388-.234c.527-.382 1.405-.621 2.41-.027c1.32.78 1.619 3.351-1.425 5.521c-.58.413-.87.62-1.373.62s-.793-.207-1.373-.62c-3.044-2.17-2.745-4.741-1.425-5.521m-.492-4.077c-.125.448-.722.764-1.915 1.397c-1.154.611-1.73.917-2.195.794a1.2 1.2 0 0 1-.508-.28C10 13.37 10 12.748 10 11.5s0-1.871.341-2.193a1.2 1.2 0 0 1 .509-.28c.465-.123 1.041.183 2.195.794c1.193.633 1.79.95 1.916 1.397c.052.185.052.38 0 .564"></svg:path></svg:g>`,
})
export class HugeiconsPlayListFavourite02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
