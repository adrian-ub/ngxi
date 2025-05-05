import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSatelliteIcon],svg[picon-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l4-4l1 1l-4 4v2L0 5m2-3l4 4l1-1l-4-4M1 2l2-2l5 5l-2 2"></svg:path>`,
})
export class PiconSatelliteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
