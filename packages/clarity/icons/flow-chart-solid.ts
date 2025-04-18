import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFlowChartSolidIcon],svg[clarity-flow-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.8 18.8h16.4v3.08h1.6V17.2h-9V14h-1.6v3.2h-9v4.68h1.6z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:rect width="14" height="10" x="2" y="23" fill="currentColor" class="clr-i-solid clr-i-solid-path-2" rx="2" ry="2"></svg:rect><svg:rect width="14" height="10" x="20" y="23" fill="currentColor" class="clr-i-solid clr-i-solid-path-3" rx="2" ry="2"></svg:rect><svg:rect width="14" height="10" x="11" y="3" fill="currentColor" class="clr-i-solid clr-i-solid-path-4" rx="2" ry="2"></svg:rect><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFlowChartSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
