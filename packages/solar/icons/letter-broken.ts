import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLetterBrokenIcon],svg[solar-letter-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path d="m18 8l-2.159 1.8c-1.836 1.53-2.755 2.295-3.841 2.295c-.65 0-1.239-.274-2-.82M6 8l.9.75l.9.75"></svg:path></svg:g>`,
})
export class SolarLetterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
