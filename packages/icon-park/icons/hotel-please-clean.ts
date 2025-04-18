import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHotelPleaseCleanIcon],svg[icon-park-hotel-please-clean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M13 27C13 27 33 27 33 15V44H13V27Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 15V14C33 8.47715 28.5228 4 23 4C17.4772 4 13 8.47715 13 14M33 15C33 27 13 27 13 27V44H33V15Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 34L22 37L27 32"></svg:path></svg:g>`,
})
export class IconParkHotelPleaseCleanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
