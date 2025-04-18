import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRadioIcon],svg[twemoji-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292F33" d="M2.697 12.389a.999.999 0 1 0 1.414 1.414l9.192-9.192a.999.999 0 1 0-1.414-1.414z"></svg:path><svg:path fill="#99AAB5" d="M36 32c0 4-4 4-4 4H4s-4 0-4-4V14s0-4 4-4h28c4 0 4 4 4 4z"></svg:path><svg:path fill="#292F33" d="M15.561 3.061a1 1 0 0 1-1.414 0l-.707-.707A.999.999 0 1 1 14.854.94l.707.707a1 1 0 0 1 0 1.414"></svg:path><svg:circle cx="27.5" cy="18.5" r="5.5" fill="#292F33"></svg:circle><svg:circle cx="27.5" cy="29.5" r="3.5" fill="#292F33"></svg:circle><svg:circle cx="27.5" cy="18.5" r="3.5" fill="#66757F"></svg:circle><svg:circle cx="27.5" cy="29.5" r="1.5" fill="#66757F"></svg:circle><svg:g fill="#292F33"><svg:circle cx="10.5" cy="25.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="25.5" r="1.5"></svg:circle><svg:circle cx="10.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="15.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="15.5" cy="25.5" r="1.5"></svg:circle><svg:circle cx="15.5" cy="30.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="30.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="10.5" cy="15.5" r="1.5"></svg:circle><svg:circle cx="15.5" cy="15.5" r="1.5"></svg:circle><svg:circle cx="5.5" cy="15.5" r="1.5"></svg:circle><svg:circle cx="10.5" cy="30.5" r="1.5"></svg:circle></svg:g>`,
})
export class TwemojiRadioIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
