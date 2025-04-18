import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiMinusIcon],svg[fluent-emoji-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f1426id2)" d="M2 15.99c0-1.69 1.38-3.06 3.06-3.06h21.85c1.69 0 3.06 1.38 3.06 3.06c0 1.69-1.38 3.06-3.06 3.06H5.06C3.38 19.05 2 17.67 2 15.99"></svg:path><svg:path fill="url(#f1426id0)" d="M2 15.99c0-1.69 1.38-3.06 3.06-3.06h21.85c1.69 0 3.06 1.38 3.06 3.06c0 1.69-1.38 3.06-3.06 3.06H5.06C3.38 19.05 2 17.67 2 15.99"></svg:path><svg:path fill="url(#f1426id1)" d="M2 15.99c0-1.69 1.38-3.06 3.06-3.06h21.85c1.69 0 3.06 1.38 3.06 3.06c0 1.69-1.38 3.06-3.06 3.06H5.06C3.38 19.05 2 17.67 2 15.99"></svg:path><svg:defs><svg:radialgradient id="f1426id0" cx="0" cy="0" r="1" gradientTransform="rotate(92.942 .75 15.923)scale(13.7536 21.0011)" gradientUnits="userSpaceOnUse"><svg:stop offset=".609" stop-color="#423473" stop-opacity="0"></svg:stop><svg:stop offset=".704" stop-color="#41366A"></svg:stop></svg:radialgradient><svg:radialgradient id="f1426id1" cx="0" cy="0" r="1" gradientTransform="rotate(130.357 10.527 13.82)scale(1.629)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9C92D2"></svg:stop><svg:stop offset="1" stop-color="#9D93D3" stop-opacity="0"></svg:stop></svg:radialgradient><svg:lineargradient id="f1426id2" x1="15.985" x2="15.985" y1="12.93" y2="19.05" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#655898"></svg:stop><svg:stop offset=".214" stop-color="#8276BD"></svg:stop><svg:stop offset=".335" stop-color="#897EC1"></svg:stop><svg:stop offset=".523" stop-color="#7966C1"></svg:stop><svg:stop offset=".863" stop-color="#8842EC"></svg:stop><svg:stop offset="1" stop-color="#6035BE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiMinusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
