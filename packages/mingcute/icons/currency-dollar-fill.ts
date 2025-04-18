import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteCurrencyDollarFillIcon],svg[mingcute-currency-dollar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-5a1 1 0 1 0-2 0v1h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 0 1 0 1H9a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h1a2.5 2.5 0 0 0 0-5h-4a.5.5 0 0 1 0-1h5a1 1 0 1 0 0-2h-2z"></svg:path></svg:g>`,
})
export class MingcuteCurrencyDollarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
