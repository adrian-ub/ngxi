import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorQuestionCircle28Icon],svg[fluent-color-question-circle-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#212121" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2"></svg:path><svg:path fill="url(#fluentColorQuestionCircle280)" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2"></svg:path><svg:path fill="#D9D9D9" d="M14 18.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m0-11.75c1.963 0 3.75 1.725 3.75 3.75c0 1.431-.465 2.274-1.546 3.306l-.197.184l-.204.187c-.806.738-1.053 1.125-1.053 1.823a.75.75 0 0 1-1.5 0c0-1.149.398-1.842 1.343-2.745l.57-.528c.81-.772 1.087-1.285 1.087-2.227c0-1.184-1.104-2.25-2.25-2.25s-2.25 1.066-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.025 1.787-3.75 3.75-3.75"></svg:path><svg:path fill="url(#fluentColorQuestionCircle281)" d="M14 18.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m0-11.75c1.963 0 3.75 1.725 3.75 3.75c0 1.431-.465 2.274-1.546 3.306l-.197.184l-.204.187c-.806.738-1.053 1.125-1.053 1.823a.75.75 0 0 1-1.5 0c0-1.149.398-1.842 1.343-2.745l.57-.528c.81-.772 1.087-1.285 1.087-2.227c0-1.184-1.104-2.25-2.25-2.25s-2.25 1.066-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.025 1.787-3.75 3.75-3.75"></svg:path><svg:defs><svg:lineargradient id="fluentColorQuestionCircle280" x1="2" x2="26" y1="2" y2="26" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorQuestionCircle281" x1="10.906" x2="15.148" y1="7" y2="21.39" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorQuestionCircle28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
