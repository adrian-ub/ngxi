import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYearlyProgessIcon],svg[arcticons-yearly-progess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.597 21.654h36.806c1.162 0 2.097.935 2.097 2.096v.5a2.09 2.09 0 0 1-2.097 2.096H5.597A2.09 2.09 0 0 1 3.5 24.25v-.5c0-1.161.935-2.096 2.097-2.096"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.597 21.654H28.07c1.161 0 2.097.935 2.097 2.096v.5a2.09 2.09 0 0 1-2.097 2.096H5.597A2.09 2.09 0 0 1 3.5 24.25v-.5c0-1.161.935-2.096 2.097-2.096"></svg:path>`,
})
export class ArcticonsYearlyProgessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
