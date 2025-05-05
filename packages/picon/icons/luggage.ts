import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLuggageIcon],svg[picon-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h1v3H6M1 3h1v3H1m1 2h1V1h2v7h1V0H2M0 7h8V2H0"></svg:path>`,
})
export class PiconLuggageIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
