import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFountainPenIcon],svg[twemoji-fountain-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#99AAB5" d="M4.167 32.729c.292.167.626.271.987.271a2 2 0 1 0-2-2c0 .361.103.695.27.987L.278 35.133L1.154 28l9-7l5 5l-7 9l-7.134.876z"></svg:path><svg:path fill="#66757F" d="M22.511 5.308a2.946 2.946 0 0 0 0 4.167l4.167 4.168a2.95 2.95 0 0 0 4.167 0l4.167-4.168a2.95 2.95 0 0 0 0-4.167l-4.167-4.167a2.946 2.946 0 0 0-4.167 0z"></svg:path><svg:path fill="#31373D" d="M9.511 18.309L26.713 1.105l8.333 8.335l-17.201 17.203a2.95 2.95 0 0 1-4.168 0l-4.166-4.168a2.945 2.945 0 0 1 0-4.166"></svg:path><svg:path fill="#66757F" d="m17.469 10.35l2.125-2.125l8.334 8.334l-2.125 2.125z"></svg:path>`,
})
export class TwemojiFountainPenIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
