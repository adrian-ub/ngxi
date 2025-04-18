import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSingleBedIcon],svg[icon-park-single-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 12C8 10.3431 9.34315 9 11 9H37C38.6569 9 40 10.3431 40 12V23H8V12Z"></svg:path><svg:path d="M6 35V39"></svg:path><svg:path d="M42 35V39"></svg:path><svg:path fill="#2F88FF" d="M29 18H19C17.3431 18 16 19.3431 16 21V23H32V21C32 19.3431 30.6569 18 29 18Z"></svg:path><svg:path d="M4 26C4 24.3431 5.34315 23 7 23H41C42.6569 23 44 24.3431 44 26V35H4V26Z"></svg:path></svg:g>`,
})
export class IconParkSingleBedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
