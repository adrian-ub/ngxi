import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkJoystickIcon],svg[icon-park-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 33H4V43H44V33Z"></svg:path><svg:path stroke-linecap="round" d="M38 26H26V33H38V26Z"></svg:path><svg:path fill="#2F88FF" d="M18 14C20.7614 14 23 11.7614 23 9C23 6.23858 20.7614 4 18 4C15.2386 4 13 6.23858 13 9C13 11.7614 15.2386 14 18 14Z"></svg:path><svg:path stroke-linecap="round" d="M16 14L9 33"></svg:path></svg:g>`,
})
export class IconParkJoystickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
