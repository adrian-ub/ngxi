import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaChargingFillIcon],svg[eva-charging-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.28 13H7a1 1 0 0 1-.86-.5a1 1 0 0 1 0-1L9.28 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h4.25Z"></svg:path><svg:path fill="currentColor" d="M15.83 6h-4.25l-2.86 5H13a1 1 0 0 1 .86.5a1 1 0 0 1 0 1L10.72 18h5.11A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaChargingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
