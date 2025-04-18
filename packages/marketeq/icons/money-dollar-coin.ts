import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyDollarCoinIcon],svg[marketeq-money-dollar-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 31.25h5.209a3.125 3.125 0 0 0 3.125-3.125v0A3.125 3.125 0 0 0 26.042 25h-2.084a3.125 3.125 0 1 1 0-6.25h5.209M25 33.333V31.25m0-12.5v-2.083z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqMoneyDollarCoinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
