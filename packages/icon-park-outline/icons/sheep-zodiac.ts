import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSheepZodiacIcon],svg[icon-park-outline-sheep-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M5 14c-1.5-2.5-2-8 3-9c2-.15 3.5.5 6 3l11 12l-3 4"></svg:path><svg:path stroke-linejoin="round" d="M19 14c-4.071.707-12 4-11 14c.5 3 1.86 5.946 5 9v5m16-25c4.221-.43 13.312.439 15 8c.563 1.861.066 7.157-5 13v4"></svg:path><svg:path d="M33 42c0-3.866-3.4-6-7-6s-7 2.134-7 6"></svg:path></svg:g>`,
})
export class IconParkOutlineSheepZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
