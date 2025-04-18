import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilChartPieIcon],svg[uil-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 4.93 18.69h.12A10 10 0 0 0 12 2m1 2.07A8 8 0 0 1 19.93 11H13ZM12 20a8 8 0 0 1-1-15.93V12a1.1 1.1 0 0 0 .07.35v.15l4 6.87A7.8 7.8 0 0 1 12 20m4.83-1.64L13.73 13h6.2a8 8 0 0 1-3.1 5.36"></svg:path>`,
})
export class UilChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
