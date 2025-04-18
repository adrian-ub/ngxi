import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartRingIcon],svg[tdesign-chart-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.055a9.001 9.001 0 1 0 6.631 15.966l-2.123-2.153A6 6 0 1 1 11 6.083zm2 0v3.028A6.005 6.005 0 0 1 17.917 11h3.028A9.004 9.004 0 0 0 13 3.055M20.945 13h-3.028a6 6 0 0 1-1.004 2.445l2.13 2.16A8.96 8.96 0 0 0 20.945 13M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path>`,
})
export class TdesignChartRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
