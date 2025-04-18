import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPieChartFilledIcon],svg[bitcoin-icons-pie-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 11.5a5 5 0 0 0-5-5v5z"></svg:path><svg:path fill="currentColor" d="M11.5 7.5a5 5 0 1 0 5 5h-5z"></svg:path>`,
})
export class BitcoinIconsPieChartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
