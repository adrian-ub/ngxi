import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartPpfIcon],svg[mdi-chart-ppf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6v2c3.2 0 6.36 1.18 8.57 3.15C15.64 13 16.83 15.5 17 18h1.97A14 12.5 0 0 0 5 6m17 15H2V3h2v16h18Z"></svg:path>`,
})
export class MdiChartPpfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
