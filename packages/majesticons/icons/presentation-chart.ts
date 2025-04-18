import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPresentationChartIcon],svg[majesticons-presentation-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2v11a1 1 0 0 1-1 1h-4.613l1.562 4.684a1 1 0 0 1-1.898.632L13.28 16h-2.558L8.95 21.316a1 1 0 1 1-1.898-.632L8.613 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1-1-1m15 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-4 2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsPresentationChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
