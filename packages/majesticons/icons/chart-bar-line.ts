import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChartBarLineIcon],svg[majesticons-chart-bar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 3a3 3 0 0 0-3 3v12a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3zm-1 3a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6zm-9 6a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0v-6zm3-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1zM2 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"></svg:path></svg:g>`,
})
export class MajesticonsChartBarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
