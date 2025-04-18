import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineOrangeIcon],svg[icon-park-outline-orange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 26c0 9.941-6 18-17 18S7 35.94 7 26c0-3.68 1.104-7.102 3-9.953C13.225 11.197 17.74 13 24 13s10.775-1.803 14 3.047c1.895 2.85 3 6.273 3 9.953"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m26 13l3-4h-3l-2-2l-2 2h-3l3 4"></svg:path><svg:circle cx="18" cy="20" r="2" fill="currentColor"></svg:circle><svg:circle cx="15" cy="27" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="25" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="32" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineOrangeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
