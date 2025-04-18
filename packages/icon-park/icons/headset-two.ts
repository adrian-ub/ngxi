import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHeadsetTwoIcon],svg[icon-park-headset-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M21 16H15V25C15 26.6569 16.3431 28 18 28C19.6569 28 21 26.6569 21 25V16Z"></svg:path><svg:path d="M18 28V38L12 38"></svg:path><svg:path d="M21 16V4H10.5C8 4 5 6 5 10C5 14 8.5 16 11 16H21Z"></svg:path><svg:path d="M27 22V10H37.5C40 10 43 12 43 16C43 20 39.5 22 37 22H27Z"></svg:path><svg:path fill="#2F88FF" d="M33 22H27V31C27 32.6569 28.3431 34 30 34C31.6569 34 33 32.6569 33 31V22Z"></svg:path><svg:path d="M30 34L30 44L36 44"></svg:path></svg:g>`,
})
export class IconParkHeadsetTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
