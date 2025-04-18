import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderChartLineIcon],svg[ri-folder-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 4h2v8h-2zm4 3h2v5h-2zm-8 2h2v3H7z"></svg:path>`,
})
export class RiFolderChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
