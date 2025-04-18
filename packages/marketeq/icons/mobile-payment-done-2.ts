import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMobilePaymentDone2Icon],svg[marketeq-mobile-payment-done-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 22.917h12.5M8.333 14.583H18.75v20.834H8.333a2.083 2.083 0 0 1-2.083-2.084V16.667a2.084 2.084 0 0 1 2.083-2.084M27.083 25l2.271 2.604l3.98-5.208"></svg:path><svg:path stroke="#306CFE" d="M43.75 41.667V8.333a2.083 2.083 0 0 0-2.083-2.083H20.833a2.083 2.083 0 0 0-2.083 2.083v33.334a2.083 2.083 0 0 0 2.083 2.083h20.834a2.083 2.083 0 0 0 2.083-2.083m-15.625-31.25h6.25l1.042-4.167h-8.334z"></svg:path></svg:g>`,
})
export class MarketeqMobilePaymentDone2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
