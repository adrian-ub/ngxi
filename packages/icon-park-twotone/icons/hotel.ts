import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHotelIcon],svg[icon-park-twotone-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHotel0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 4h40"></svg:path><svg:rect width="32" height="40" x="8" y="4" fill="#555" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 32h8v12h-8z"></svg:path><svg:path stroke-linecap="round" d="M15 12h2m-2 6h2m6-6h2m-2 6h2m6-6h2m-2 6h2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40M28 32h2c.552 0 1.01-.452.904-.994C30.352 28.166 27.471 26 24 26s-6.352 2.165-6.904 5.006c-.106.542.352.994.904.994h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHotel0)"></svg:path>`,
})
export class IconParkTwotoneHotelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
