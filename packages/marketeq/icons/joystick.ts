import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqJoystickIcon],svg[marketeq-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583V31.25zm4.167 18.75a2.083 2.083 0 0 0-2.084-2.083h-4.166a2.083 2.083 0 0 0-2.084 2.083v2.084h8.334z"></svg:path><svg:path stroke="#306CFE" d="M39.583 43.75H10.417V37.5a2.083 2.083 0 0 1 2.083-2.083h25a2.083 2.083 0 0 1 2.083 2.083zM25 6.25a4.167 4.167 0 1 0 0 8.333a4.167 4.167 0 0 0 0-8.333"></svg:path></svg:g>`,
})
export class MarketeqJoystickIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
