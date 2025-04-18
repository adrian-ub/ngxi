import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWalletMoneyIcon],svg[marketeq-wallet-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m35.854 18.75l3.73-5.333l-10.23-7.167l-8.77 12.5zM18.938 8.333L11.625 18.75h8.958L25 12.5z"></svg:path><svg:path stroke="#306CFE" d="M41.667 18.75H8.333c-1.15 0-2.083.933-2.083 2.083v20.834c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V20.833c0-1.15-.933-2.083-2.083-2.083"></svg:path><svg:path stroke="#344054" d="M33.333 27.083H43.75v8.334H33.333a2.083 2.083 0 0 1-2.083-2.084v-4.166a2.084 2.084 0 0 1 2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqWalletMoneyIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
