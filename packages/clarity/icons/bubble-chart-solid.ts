import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBubbleChartSolidIcon],svg[clarity-bubble-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2m-23 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8m15 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-8 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBubbleChartSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
