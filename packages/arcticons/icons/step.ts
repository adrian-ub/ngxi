import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStepIcon],svg[arcticons-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 32.128l6.915-11.585L24 27.458l-6.915 11.585zm6.915-11.586L19.33 8.957l11.585 6.915L24 27.457z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 27.457l6.915-11.585L42.5 22.787l-6.915 11.585z"></svg:path>`,
})
export class ArcticonsStepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
