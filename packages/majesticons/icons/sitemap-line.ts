import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSitemapLineIcon],svg[majesticons-sitemap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4h4v4h-4zm0 12h4v4h-4zm-7 0h4v4H3zm14 0h4v4h-4zm-5-8v4m0 4v-4m0 0h5a2 2 0 0 1 2 2v2m-7-4H7a2 2 0 0 0-2 2v2"></svg:path>`,
})
export class MajesticonsSitemapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
