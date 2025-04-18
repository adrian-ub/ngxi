import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWalletMoney3Icon],svg[marketeq-wallet-money-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M35.313 31.25h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="m35.854 18.75l3.73-5.333l-10.23-7.167l-8.77 12.5zM18.938 6.25l-8.771 12.5h10.416l5.334-7.604z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 18.75H8.333c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V20.833c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqWalletMoney3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
