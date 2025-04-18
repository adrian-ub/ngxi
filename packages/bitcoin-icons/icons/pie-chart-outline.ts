import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPieChartOutlineIcon],svg[bitcoin-icons-pie-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M17.5 11A4.5 4.5 0 0 0 13 6.5V11z"></svg:path><svg:path d="M11 8.5a4.5 4.5 0 1 0 4.5 4.5H11z"></svg:path></svg:g>`,
})
export class BitcoinIconsPieChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
