import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorMic16Icon],svg[fluent-color-mic-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorMic160)" d="M3.733 7.313A.733.733 0 0 0 3 8.046a5 5 0 0 0 4.267 4.946v1.275a.733.733 0 0 0 1.466 0v-1.275A5 5 0 0 0 13 8.046a.733.733 0 1 0-1.467 0a3.533 3.533 0 1 1-7.066 0a.733.733 0 0 0-.734-.733"></svg:path><svg:path fill="url(#fluentColorMic161)" d="M3.733 7.313A.733.733 0 0 0 3 8.046a5 5 0 0 0 4.267 4.946v1.275a.733.733 0 0 0 1.466 0v-1.275A5 5 0 0 0 13 8.046a.733.733 0 1 0-1.467 0a3.533 3.533 0 1 1-7.066 0a.733.733 0 0 0-.734-.733"></svg:path><svg:path fill="url(#fluentColorMic162)" d="M8 2a2.5 2.5 0 0 0-2.5 2.5V8a2.5 2.5 0 0 0 5 0V4.5A2.5 2.5 0 0 0 8 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorMic160" x1="8" x2="8" y1="7.313" y2="15" gradientUnits="userSpaceOnUse"><svg:stop></svg:stop><svg:stop offset="1" stop-color="#666"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMic161" x1="3" x2="7.757" y1="4.076" y2="15.506" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CAD2D9"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMic162" x1="4.25" x2="8.602" y1=".068" y2="15.321" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorMic16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
