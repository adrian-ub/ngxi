import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkApiIcon],svg[icon-park-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37 22.0001L34 25.0001L23 14.0001L26 11.0001C27.5 9.50002 33 7.00005 37 11.0001C41 15.0001 38.5 20.5 37 22.0001Z"></svg:path><svg:path d="M42 6L37 11"></svg:path><svg:path fill="#2F88FF" d="M11 25.9999L14 22.9999L25 33.9999L22 36.9999C20.5 38.5 15 41 11 36.9999C7 32.9999 9.5 27.5 11 25.9999Z"></svg:path><svg:path d="M23 32L27 28"></svg:path><svg:path d="M6 42L11 37"></svg:path><svg:path d="M16 25L20 21"></svg:path></svg:g>`,
})
export class IconParkApiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
