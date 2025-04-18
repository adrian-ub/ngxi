import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyAltIcon],svg[marketeq-money-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M20.73 20.833h.207"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 10.417h-25c-1.15 0-2.083.933-2.083 2.083v16.667c0 1.15.933 2.083 2.083 2.083h25c1.15 0 2.084-.933 2.084-2.083V12.5c0-1.15-.933-2.083-2.084-2.083"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M35.417 18.75h6.25a2.083 2.083 0 0 1 2.083 2.083V37.5a2.083 2.083 0 0 1-2.083 2.083h-25a2.083 2.083 0 0 1-2.084-2.083v-6.25"></svg:path></svg:g>`,
})
export class MarketeqMoneyAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
