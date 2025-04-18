import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSitemapIcon],svg[la-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5v8h3v2H5v4H2v8h8v-8H7v-2h8v2h-3v8h8v-8h-3v-2h8v2h-3v8h8v-8h-3v-4H17v-2h3V5zm2 2h4v4h-4zM4 21h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4z"></svg:path>`,
})
export class LaSitemapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
