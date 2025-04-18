import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSensorWindowIcon],svg[ic-sharp-sensor-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v16H6V4zM4 2v20h16V2zm3 17h10v-6H7zm3-9h4v1h3V5H7v6h3z"></svg:path>`,
})
export class IcSharpSensorWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
