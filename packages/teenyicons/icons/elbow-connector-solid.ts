import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsElbowConnectorSolidIcon],svg[teenyicons-elbow-connector-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0a1.5 1.5 0 1 0 1.415 2H7v12h5.085a1.5 1.5 0 1 0 0-1H8V1H2.915A1.5 1.5 0 0 0 1.5 0"></svg:path>`,
})
export class TeenyiconsElbowConnectorSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
