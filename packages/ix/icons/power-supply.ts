import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPowerSupplyIcon],svg[ix-power-supply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 128V42.667h-42.666V128h-64v128c0 67.648 44.981 124.79 106.665 143.149l.001 70.184h85.333l.023-70.19C360.362 380.777 405.333 323.64 405.333 256V128h-64V42.667h-42.667V128zm64 106.667l25.817-64h-78.507L202.667 256h42.666l-32 106.667l117.333-128z" clip-rule="evenodd"></svg:path>`,
})
export class IxPowerSupplyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
