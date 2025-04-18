import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBatteryHalfSharpIcon],svg[famicons-battery-half-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 384h432V128H17Zm32-224h368v192H49Z"></svg:path><svg:path fill="currentColor" d="M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z"></svg:path>`,
})
export class FamiconsBatteryHalfSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
