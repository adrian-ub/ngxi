import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChartPie20SolidIcon],svg[heroicons-chart-pie-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 9a1 1 0 0 1-1-1V3c0-.552.45-1.007.997-.93a7 7 0 0 1 5.933 5.933c.078.547-.378.997-.93.997z"></svg:path><svg:path d="M8.003 4.07C8.55 3.994 9 4.449 9 5v5a1 1 0 0 0 1 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 2 11a7 7 0 0 1 6.003-6.93"></svg:path></svg:g>`,
})
export class HeroiconsChartPie20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
