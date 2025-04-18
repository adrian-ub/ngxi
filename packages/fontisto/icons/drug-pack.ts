import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoDrugPackIcon],svg[fontisto-drug-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.869.31L.311 7.869a1.05 1.05 0 0 0 0 1.49l14.33 14.331a1.046 1.046 0 0 0 1.488 0l7.559-7.559a1.05 1.05 0 0 0 0-1.49L9.358.311a1.05 1.05 0 0 0-1.49 0zm8.665 20.297a1.453 1.453 0 1 1-2.048-2.06a1.453 1.453 0 0 1 2.048 2.059zm-2.771-2.764a1.451 1.451 0 1 1-2.041-2.06a1.451 1.451 0 0 1 2.04 2.06zm-2.77-2.77a1.453 1.453 0 1 1-2.048-2.06a1.453 1.453 0 0 1 2.048 2.059zm-2.771-2.771a1.45 1.45 0 1 1 .431-1.031v.001a1.46 1.46 0 0 1-.43 1.03zm-2.764-2.77a1.45 1.45 0 1 1 .431-1.031v.001a1.46 1.46 0 0 1-.43 1.03zm15.145 7.005a1.45 1.45 0 1 1 .43-1.031v.002a1.46 1.46 0 0 1-.43 1.03zm-2.77-2.771a1.45 1.45 0 1 1 .43-1.031v.002a1.46 1.46 0 0 1-.43 1.03zm-2.771-2.77a1.45 1.45 0 1 1 .43-1.031v.002a1.46 1.46 0 0 1-.43 1.03zm-2.764-2.764a1.45 1.45 0 1 1 .431-1.031v.001a1.46 1.46 0 0 1-.43 1.03zm-2.77-2.77a1.45 1.45 0 1 1 .431-1.031v.001a1.46 1.46 0 0 1-.43 1.03z"></svg:path>`,
})
export class FontistoDrugPackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
