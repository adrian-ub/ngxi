import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPowerBankIcon],svg[marketeq-power-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.75 25l2.083-4.167h-4.166l2.083-4.166m0 18.75v6.25a2.083 2.083 0 0 0 2.083 2.083H37.5a2.083 2.083 0 0 0 2.083-2.083V18.75"></svg:path><svg:path stroke="#306CFE" d="M29.167 33.333v-25a2.083 2.083 0 0 0-2.084-2.083H10.417a2.083 2.083 0 0 0-2.084 2.083v25a2.083 2.083 0 0 0 2.084 2.084h16.666a2.083 2.083 0 0 0 2.084-2.084m12.5-22.916H37.5v6.25h4.167z"></svg:path></svg:g>`,
})
export class MarketeqPowerBankIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
