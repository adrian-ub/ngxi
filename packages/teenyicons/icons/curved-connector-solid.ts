import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCurvedConnectorSolidIcon],svg[teenyicons-curved-connector-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0a1.5 1.5 0 1 0 1.415 2H4.5A2.5 2.5 0 0 1 7 4.5v6a3.5 3.5 0 0 0 3.5 3.5h1.585a1.5 1.5 0 1 0 0-1H10.5A2.5 2.5 0 0 1 8 10.5v-6A3.5 3.5 0 0 0 4.5 1H2.915A1.5 1.5 0 0 0 1.5 0"></svg:path>`,
})
export class TeenyiconsCurvedConnectorSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
