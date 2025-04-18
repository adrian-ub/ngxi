import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParamIcon],svg[arcticons-param-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.39 38.058L22.026 39.5L11.823 12.68l10.131-3.552c5.296-1.856 11.459.46 13.575 6.155c1.63 4.384.396 10.732-6.111 13.469L26.52 29.97z"></svg:path>`,
})
export class ArcticonsParamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
