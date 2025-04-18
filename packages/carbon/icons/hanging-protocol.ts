import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHangingProtocolIcon],svg[carbon-hanging-protocol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M26.37 20.52L17 15.41v-1.55A4 4 0 1 0 12 10h2a2 2 0 1 1 4 .34A2.08 2.08 0 0 1 15.89 12a.89.89 0 0 0-.89.89v2.52l-9.37 5.11A3.1 3.1 0 0 0 4.25 22a2.83 2.83 0 0 0 2.56 4h18.38a2.83 2.83 0 0 0 2.56-4a3.1 3.1 0 0 0-1.38-1.48zM25.19 24H6.81a.81.81 0 0 1-.81-.81a1 1 0 0 1 .52-.88L16 17.14l9.48 5.17a1 1 0 0 1 .52.88a.81.81 0 0 1-.81.81z" fill="currentColor"></svg:path>`,
})
export class CarbonHangingProtocolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
