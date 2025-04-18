import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMobilePaymentDollarIcon],svg[marketeq-mobile-payment-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 22.917h-5.208a3.125 3.125 0 0 0-3.125 3.125v0a3.125 3.125 0 0 0 3.125 3.125h2.083a3.125 3.125 0 0 1 3.125 3.125v0a3.125 3.125 0 0 1-3.125 3.125H31.25m4.167 2.083v-2.083m0-12.5v-2.084z"></svg:path><svg:path stroke="#306CFE" d="M29.167 43.75H12.5a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25h20.833a2.083 2.083 0 0 1 2.084 2.083V12.5"></svg:path><svg:path stroke="#306CFE" d="M27.083 6.25H18.75l1.042 4.167h6.25z"></svg:path></svg:g>`,
})
export class MarketeqMobilePaymentDollarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
