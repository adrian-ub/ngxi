import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinPieChartIcon],svg[hugeicons-bitcoin-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path><svg:path d="M19 12a7 7 0 1 0-14 0a7 7 0 0 0 14 0M12 2v3m7 7h3m-3 7l-2-2"></svg:path><svg:path d="M10.438 14.667V9.333m1.562 0V8m0 8v-1.333M10.438 12h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinPieChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
