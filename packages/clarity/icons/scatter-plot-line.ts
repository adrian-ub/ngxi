import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityScatterPlotLineIcon],svg[clarity-scatter-plot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M9.101 15.8a.8.8 0 0 0 1.13 0l1.16-1.16l1.16 1.16a.8.8 0 1 0 1.13-1.13l-1.15-1.13l1.16-1.16a.8.8 0 1 0-1.13-1.13l-1.16 1.16l-1.17-1.19a.8.8 0 1 0-1.13 1.13l1.16 1.19l-1.16 1.13a.8.8 0 0 0 0 1.13" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M15.176 25.536a.8.8 0 0 0 1.13 0l1.16-1.16l1.16 1.16a.8.8 0 1 0 1.13-1.13l-1.15-1.13l1.16-1.16a.8.8 0 1 0-1.13-1.13l-1.16 1.16l-1.17-1.19a.8.8 0 1 0-1.13 1.13l1.16 1.19l-1.16 1.13a.8.8 0 0 0 0 1.13" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M22.912 20.343a.8.8 0 0 0 1.13 0l1.16-1.16l1.16 1.16a.8.8 0 1 0 1.13-1.13l-1.15-1.13l1.16-1.16a.8.8 0 1 0-1.13-1.13l-1.16 1.16l-1.17-1.19a.8.8 0 1 0-1.13 1.13l1.16 1.19l-1.16 1.13a.8.8 0 0 0 0 1.13" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityScatterPlotLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
