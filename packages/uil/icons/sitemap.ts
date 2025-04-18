import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSitemapIcon],svg[uil-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15h-2v-3a1 1 0 0 0-1-1h-6V9h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v2H5a1 1 0 0 0-1 1v3H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6v-2h12v2h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M7 17v4H3v-4Zm3-10V3h4v4Zm11 14h-4v-4h4Z"></svg:path>`,
})
export class UilSitemapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
