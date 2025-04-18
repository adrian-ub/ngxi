import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagStLuciaIcon],svg[twemoji-flag-for-flag-st-lucia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6CF" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#FFF" d="M9.333 28.747l2.346-2.909L18 10.2l6.321 15.638l2.346 2.909L18 7.34z"></svg:path><svg:path d="M24.321 25.838L18 10.2l-6.321 15.638L18 18z" fill="#000"></svg:path><svg:path fill="#FCD116" d="M18 18l-6.321 7.838l-2.346 2.909h17.334l-2.346-2.909z"></svg:path>`,
})
export class TwemojiFlagForFlagStLuciaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
