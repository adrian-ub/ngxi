import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPieChartLineIcon],svg[clarity-pie-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M17 27a8 8 0 0 1 0-16v8h8a8 8 0 0 1-8 8m6.247-6.6H15.4v-7.598A6.4 6.4 0 0 0 17 25.4a6.4 6.4 0 0 0 6.247-5" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M19 9a8 8 0 0 1 8 8h-8Zm6.198 6.4a6.41 6.41 0 0 0-4.598-4.599V15.4Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPieChartLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
