import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsEnvelopeIcon],svg[lineicons-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 9.6H8c-3.4 0-6.3 2.8-6.3 6.3v32.4c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V15.8c0-3.4-2.9-6.2-6.3-6.2m0 4.5h.3L32 29.7L7.7 14.1zm0 35.8H8c-1 0-1.8-.8-1.8-1.8V18.5l23.4 15c.7.5 1.5.7 2.3.7s1.6-.2 2.3-.7l23.4-15v29.7c.2 1-.6 1.7-1.6 1.7"></svg:path>`,
})
export class LineiconsEnvelopeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
