import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPieChartSolidIcon],svg[clarity-pie-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 7v22a2 2 0 0 1-2 2s-30-.895-30-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2m-9 12h-8v-8a8 8 0 1 0 8 8m-6-2h8a8 8 0 0 0-8-8Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPieChartSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
