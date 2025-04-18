import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPieChartIcon],svg[proicons-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9.25"></svg:circle><svg:path d="M12 2.75a9.25 9.25 0 1 0 8.01 4.625L12 12z"></svg:path><svg:path d="M12 2.75a9.25 9.25 0 1 0 8.01 13.875L12 12z"></svg:path></svg:g>`,
})
export class ProiconsPieChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
