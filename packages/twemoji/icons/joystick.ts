import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiJoystickIcon],svg[twemoji-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#99AAB5" d="M16 9h4v17h-4z"></svg:path><svg:path fill="#DA2F47" d="M10 24.5A1.5 1.5 0 0 1 8.5 26h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 1.5 1.5"></svg:path><svg:path fill="#31373D" d="M34 33a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#31373D" d="M10 34.5A1.5 1.5 0 0 1 8.5 36h-3a1.5 1.5 0 1 1 0-3h3a1.5 1.5 0 0 1 1.5 1.5m22 0a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 1.5 1.5"></svg:path><svg:circle cx="18" cy="7" r="5" fill="#DA2F47"></svg:circle><svg:path fill="#31373D" d="M25 26a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2v-1c0-1.104 3.896-6 5-6h4c1.104 0 5 4.896 5 6z"></svg:path><svg:path fill="#66757F" d="M33 28a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h28a1 1 0 0 1 1 1"></svg:path>`,
})
export class TwemojiJoystickIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
