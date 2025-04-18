import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPowderIcon],svg[icon-park-solid-powder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M44 40V20a3 3 0 0 0-3-3h-5.285c-1.541 0-2.892 1.243-3.924 2.388C30.633 20.674 28.377 22 24 22s-6.633-1.326-7.791-2.612C15.177 18.243 13.826 17 12.285 17H7a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 17c0 2.761-4.03 5-9 5s-9-2.239-9-5"></svg:path><svg:ellipse cx="24" cy="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="9" ry="5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 17v-7m-18 7v-7"></svg:path><svg:ellipse cx="27" cy="10" fill="currentColor" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="21" cy="10" fill="currentColor" rx="2" ry="1"></svg:ellipse></svg:g>`,
})
export class IconParkSolidPowderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
