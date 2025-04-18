import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSitemapFIcon],svg[jam-sitemap-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 12.858h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m6-12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m6 12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path><svg:path d="M9 9.858v-2h2v4H6a1 1 0 0 0-1 1v.935H3v-.935a3 3 0 0 1 3-3z"></svg:path><svg:path d="M10 11.858v-2h4a3 3 0 0 1 3 3v1.02h-2v-1.02a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class JamSitemapFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
