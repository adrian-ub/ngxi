import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGamepadIcon],svg[icon-park-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="28" x="4" y="13" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="14"></svg:rect><svg:circle cx="31" cy="22" r="2" fill="#fff"></svg:circle><svg:circle cx="35" cy="27" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 27H22M12 27H22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 7V13M24 7V13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 22V32"></svg:path></svg:g>`,
})
export class IconParkGamepadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
