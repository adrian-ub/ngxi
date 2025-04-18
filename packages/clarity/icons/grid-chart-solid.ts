import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityGridChartSolidIcon],svg[clarity-grid-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M32 17H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M15 30H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M32 30H21a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityGridChartSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
