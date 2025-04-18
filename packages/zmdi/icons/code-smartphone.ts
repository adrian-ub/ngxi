import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCodeSmartphoneIcon],svg[zmdi-code-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 91v42H21V48q0-18 12.5-30.5T64 5l213 1q18 0 30.5 12T320 48v85h-43V91zm179 247l-30-30l68-68l-68-68l30-30l98 98zm-115-30l-30 30l-98-98l98-98l30 30l-68 68zm149 81v-42h43v85q0 18-12.5 30.5T277 475H64q-18 0-30.5-12.5T21 432v-85h43v42z"></svg:path>`,
})
export class ZmdiCodeSmartphoneIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
