import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWalletAltIcon],svg[marketeq-wallet-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m12.5 14.583l16.938-7.52a2.083 2.083 0 0 1 2.708.958l3.27 6.562"></svg:path><svg:path stroke="#306CFE" d="M41.667 33.333v8.334a2.083 2.083 0 0 1-2.084 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083v-25a2.083 2.083 0 0 1 2.083-2.084h31.25a2.083 2.083 0 0 1 2.084 2.084V25"></svg:path><svg:path stroke="#344054" d="M41.667 25h-6.25c-1.15 0-2.084.933-2.084 2.083v4.167c0 1.15.933 2.083 2.084 2.083h6.25c1.15 0 2.083-.932 2.083-2.083v-4.167c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqWalletAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
