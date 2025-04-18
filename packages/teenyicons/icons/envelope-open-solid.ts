import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEnvelopeOpenSolidIcon],svg[teenyicons-envelope-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.756.35a1.5 1.5 0 0 1 1.488 0l6 3.428a1.5 1.5 0 0 1 .408.341L7.5 7.933L.348 4.12q.17-.204.408-.341z"></svg:path><svg:path fill="currentColor" d="M0 5.067V13.5A1.5 1.5 0 0 0 1.5 15h12a1.5 1.5 0 0 0 1.5-1.5V5.067l-7.5 4z"></svg:path>`,
})
export class TeenyiconsEnvelopeOpenSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
