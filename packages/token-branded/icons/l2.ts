import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedL2Icon],svg[token-branded-l2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FC8800" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-.53a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedL20)" d="M13.08 15.939L7.844 6.706h10.509z"></svg:path><svg:path fill="url(#tokenBrandedL21)" d="m10.877 8.062l-5.23 9.233h10.508z"></svg:path><svg:path fill="#FFCD05" d="m9.745 10.063l3.336 5.876l1.148-2.012l-3.351-5.865z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedL20" x1="19.803" x2="7.994" y1="4.404" y2="13.022" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#915512"></svg:stop><svg:stop offset="1" stop-color="#E0A662"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedL21" x1="15.921" x2="2.637" y1="11.784" y2="18.975" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#935E26"></svg:stop><svg:stop offset="1" stop-color="#F1BD84"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedL2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
