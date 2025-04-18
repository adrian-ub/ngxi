import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSitemapFilledIcon],svg[tabler-sitemap-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 16.667A2.667 2.667 0 0 1 4.667 14h2.666A2.667 2.667 0 0 1 10 16.667v2.666A2.667 2.667 0 0 1 7.333 22H4.667A2.667 2.667 0 0 1 2 19.333zm12 0A2.667 2.667 0 0 1 16.667 14h2.666A2.667 2.667 0 0 1 22 16.667v2.666A2.667 2.667 0 0 1 19.333 22h-2.666A2.667 2.667 0 0 1 14 19.333zm-6-12A2.667 2.667 0 0 1 10.667 2h2.666A2.667 2.667 0 0 1 16 4.667v2.666A2.667 2.667 0 0 1 13.333 10h-2.666A2.667 2.667 0 0 1 8 7.333z"></svg:path><svg:path d="M12 8a1 1 0 0 0-1 1v2H8c-1.645 0-3 1.355-3 3v1a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-1c0-.564.436-1 1-1h8c.564 0 1 .436 1 1v1a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-1c0-1.645-1.355-3-3-3h-3V9a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class TablerSitemapFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
