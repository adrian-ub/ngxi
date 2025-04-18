import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBillCashlessIcon],svg[streamline-bill-cashless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 2.5h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1m-11-8v7a1 1 0 0 0 1 1H9"></svg:path><svg:path d="M5.586 5.586a2 2 0 1 1 2.828 2.828M5.022 7.296a2 2 0 0 0 1.745 1.69M13.5 13.5L.5.5"></svg:path></svg:g>`,
})
export class StreamlineBillCashlessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
