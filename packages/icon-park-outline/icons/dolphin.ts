import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDolphinIcon],svg[icon-park-outline-dolphin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 7C14.23 1.613 9.686 8.632 8 11c-5.664 1.218-2.854 3.324-1 4c1.214.406 4.146 1.323 6 2c.405 3.248 1.663 6.154 2 7c0-.812 1.326-3.647 2-5c8.092 3.248 13.797 11.602 17 16c-1.214 2.436-2.494 6.308-3 8l6-3l7 2c0-3.248-4.145-6.647-6-8c.81-12.992-5.29-20.8-9-23c.405-1.624 1.157-4.323 2-5c-3.237-1.624-5.82.154-7 1"></svg:path><svg:circle cx="16" cy="11" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineDolphinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
