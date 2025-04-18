import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBeautyInstrumentIcon],svg[icon-park-beauty-instrument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M17 34L31 34"></svg:path><svg:path stroke="#000" d="M16 27L32 27"></svg:path><svg:rect width="30" height="16" x="9" y="4" fill="#2F88FF" stroke="#000" rx="4"></svg:rect><svg:path stroke="#000" d="M13.9999 20L18.9999 44H28.9999L33.9999 20"></svg:path><svg:path stroke="#fff" d="M17 12L30 12"></svg:path></svg:g>`,
})
export class IconParkBeautyInstrumentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
