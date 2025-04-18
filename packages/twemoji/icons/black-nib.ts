import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBlackNibIcon],svg[twemoji-black-nib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#99AAB5" d="M31.986 32.729a2 2 0 0 1-.987.271a2 2 0 1 1 2-2c0 .361-.104.695-.271.987l3.146 3.146L34.999 28l-9-7l-5 5l7 9l7.134.876z"></svg:path><svg:path fill="#66757F" d="M13.643 5.308a2.946 2.946 0 0 1 0 4.167l-4.167 4.168a2.95 2.95 0 0 1-4.167 0L1.141 9.475a2.95 2.95 0 0 1 0-4.167l4.167-4.167a2.946 2.946 0 0 1 4.167 0z"></svg:path><svg:path fill="#31373D" d="M26.643 18.309L9.44 1.105L1.107 9.44l17.202 17.202a2.95 2.95 0 0 0 4.168 0l4.166-4.168a2.945 2.945 0 0 0 0-4.165"></svg:path><svg:path fill="#66757F" d="m8.225 16.56l8.334-8.335l2.124 2.125l-8.333 8.334z"></svg:path>`,
})
export class TwemojiBlackNibIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
