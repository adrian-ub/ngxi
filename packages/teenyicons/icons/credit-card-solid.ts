import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCreditCardSolidIcon],svg[teenyicons-credit-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2A1.5 1.5 0 0 1 15 3.5V5H0V3.5A1.5 1.5 0 0 1 1.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 6v5.5A1.5 1.5 0 0 0 1.5 13h12a1.5 1.5 0 0 0 1.5-1.5V6zm2 4h6V9H2zm11 0h-3V9h3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsCreditCardSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
