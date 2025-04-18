import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCashierMachineLeftIcon],svg[marketeq-cashier-machine-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 22.917v-8.334m8.333-6.25V12.5A2.083 2.083 0 0 1 25 14.583H12.5a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25H25a2.083 2.083 0 0 1 2.083 2.083"></svg:path><svg:path stroke="#306CFE" d="M6.25 35.417v6.25a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083v-6.25l-3.687-11.084a2.08 2.08 0 0 0-1.98-1.416H11.917a2.08 2.08 0 0 0-2.084 1.416zm0 0v6.25a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083v-6.25z"></svg:path></svg:g>`,
})
export class MarketeqCashierMachineLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
