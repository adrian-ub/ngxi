import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderChartFillIcon],svg[ri-folder-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 9v8h2V9zm4 3v5h2v-5zm-8 2v3h2v-3z"></svg:path>`,
})
export class RiFolderChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
