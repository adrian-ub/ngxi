import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLockingLaptopIcon],svg[icon-park-locking-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 9H11C9.34315 9 8 10.3431 8 12V33H40V28"></svg:path><svg:path fill="#2F88FF" d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"></svg:path><svg:rect width="12" height="8" x="30" y="13" fill="#2F88FF" rx="3"></svg:rect><svg:path fill="#2F88FF" d="M36 7C37.6569 7 39 8.34315 39 10L39 13L33 13L33 10C33 8.34315 34.3431 7 36 7Z"></svg:path></svg:g>`,
})
export class IconParkLockingLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
