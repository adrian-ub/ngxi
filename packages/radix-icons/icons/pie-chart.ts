import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsPieChartIcon],svg[radix-icons-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.85 7.5a5.65 5.65 0 1 1 11.3 0a5.65 5.65 0 0 1-11.3 0M7.5.85a6.65 6.65 0 1 0 0 13.3a6.65 6.65 0 0 0 0-13.3M7 8V3.128q.245-.027.5-.028A4.4 4.4 0 0 1 11.872 8z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsPieChartIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
