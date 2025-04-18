import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChartPieTwoSolidIcon],svg[mynaui-chart-pie-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3.784v7.905l5.59 5.59a8.25 8.25 0 0 0-5.59-13.496M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a9.72 9.72 0 0 1-2.856 6.894A9.72 9.72 0 0 1 12 21.75A9.75 9.75 0 0 1 2.25 12"></svg:path>`,
})
export class MynauiChartPieTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
