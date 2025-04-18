import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSitemapIcon],svg[majesticons-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" d="M10 4h4v4h-4zm0 12h4v4h-4zm-8 0h4v4H2zm16 0h4v4h-4z"></svg:path><svg:path d="M12 8v4m0 4v-4m0 0h6a2 2 0 0 1 2 2v2m-8-4H6a2 2 0 0 0-2 2v2"></svg:path></svg:g>`,
})
export class MajesticonsSitemapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
