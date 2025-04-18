import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSeverityMediumIcon],svg[pajamas-severity-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.04 10.454L.24 3.182c-.398-.603-.29-1.457.24-1.91C.688 1.097.94 1 1.2 1h9.6c.663 0 1.2.61 1.2 1.364c0 .295-.084.582-.24.818l-4.8 7.272c-.398.603-1.15.725-1.68.273a1.3 1.3 0 0 1-.24-.273"></svg:path>`,
})
export class PajamasSeverityMediumIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
