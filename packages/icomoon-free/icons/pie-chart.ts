import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePieChartIcon],svg[icomoon-free-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9V2a7 7 0 1 0 6.262 3.869zm7.262-5.131A7 7 0 0 0 8 0v7z"></svg:path>`,
})
export class IcomoonFreePieChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
