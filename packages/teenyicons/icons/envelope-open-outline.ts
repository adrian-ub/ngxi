import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEnvelopeOpenOutlineIcon],svg[teenyicons-envelope-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5 5l7 3.5l7-3.5m0 .08v8.42a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V5.08a1 1 0 0 1 .504-.868l6-3.428a1 1 0 0 1 .992 0l6 3.428a1 1 0 0 1 .504.868Z"></svg:path>`,
})
export class TeenyiconsEnvelopeOpenOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
