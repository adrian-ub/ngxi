import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBarChartIcon],svg[twemoji-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="M31 2H5a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"></svg:path><svg:path fill="#E1E8ED" d="M31 1H5a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h26a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4m0 2c1.103 0 2 .897 2 2v4h-6V3zm-4 16h6v6h-6zm0-2v-6h6v6zM25 3v6h-6V3zm-6 8h6v6h-6zm0 8h6v6h-6zM17 3v6h-6V3zm-6 8h6v6h-6zm0 8h6v6h-6zM3 5c0-1.103.897-2 2-2h4v6H3zm0 6h6v6H3zm0 8h6v6H3zm2 14c-1.103 0-2-.897-2-2v-4h6v6zm6 0v-6h6v6zm8 0v-6h6v6zm12 0h-4v-6h6v4c0 1.103-.897 2-2 2"></svg:path><svg:path fill="#5C913B" d="M13 33H7V16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#3B94D9" d="M29 33h-6V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#DD2E44" d="M21 33h-6V23a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></svg:path>`,
})
export class TwemojiBarChartIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
