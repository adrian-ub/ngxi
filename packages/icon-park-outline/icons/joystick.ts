import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineJoystickIcon],svg[icon-park-outline-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 33H4v10h40z"></svg:path><svg:path stroke-linecap="round" d="M38 26H26v7h12z"></svg:path><svg:path d="M18 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" d="M16 14L9 33"></svg:path></svg:g>`,
})
export class IconParkOutlineJoystickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
