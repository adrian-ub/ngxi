import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRingFilledIcon],svg[tdesign-chart-ring-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1.045v6.567A4.51 4.51 0 0 1 16.389 11h6.566A11 11 0 0 0 13 1.045m10 10.85v.21zM22.955 13H16.39a4.5 4.5 0 0 1-.58 1.396l4.644 4.643A10.95 10.95 0 0 0 22.955 13m-3.105 6.706l-.144.144z"></svg:path><svg:path fill="currentColor" d="m19.039 20.454l-4.644-4.644A4.5 4.5 0 1 1 11 7.612V1.045C5.393 1.55 1 6.262 1 12c0 6.075 4.925 11 11 11c2.677 0 5.131-.956 7.039-2.547"></svg:path>`,
})
export class TdesignChartRingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
