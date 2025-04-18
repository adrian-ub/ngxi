import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyCashFileDollarCommonMoneyCurrencyCashFileIcon],svg[streamline-money-cash-file-dollar-common-money-currency-cash-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7Z"></svg:path><svg:path d="M8.5 5V.5l5 5H9a.5.5 0 0 1-.5-.5Zm-4-.5V3M3 8.5c0 .75.67 1 1.5 1s1.5 0 1.5-1C6 7 3 7 3 5.5c0-1 .67-1 1.5-1s1.5.38 1.5 1m-1.5 4V11m4-1.5h3"></svg:path></svg:g>`,
})
export class StreamlineMoneyCashFileDollarCommonMoneyCurrencyCashFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
