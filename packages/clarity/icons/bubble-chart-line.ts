import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBubbleChartLineIcon],svg[clarity-bubble-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M29 18a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M15 14a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4-2.4a2.4 2.4 0 1 0 .001 4.801A2.4 2.4 0 0 0 11 11.6" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M21 23a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBubbleChartLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
