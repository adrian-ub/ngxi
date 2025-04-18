import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorMic20Icon],svg[fluent-color-mic-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorMic200)" d="M4 10a1 1 0 1 1 2 0a4 4 0 0 0 8 0a1 1 0 1 1 2 0a6 6 0 0 1-5 5.917V17.5a1 1 0 1 1-2 0v-1.583A6 6 0 0 1 4 10"></svg:path><svg:path fill="url(#fluentColorMic201)" d="M7 5a3 3 0 0 1 6 0v5a3 3 0 1 1-6 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorMic200" x1="4" x2="10" y1="5" y2="19" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CAD2D9"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMic201" x1="5.5" x2="11.5" y1="-.5" y2="19" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorMic20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
