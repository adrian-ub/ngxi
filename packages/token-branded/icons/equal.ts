import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEqualIcon],svg[token-branded-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEqual0)" fill-rule="evenodd" d="M12 19.941a7.942 7.942 0 1 0 0-15.883a7.942 7.942 0 0 0 0 15.883M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedEqual1)" d="M12.794 6.97c-1.694 0-5.12.884-6.618 1.324l2.647-2.912v.794c.265-.175 1.377-.53 3.706-.53c2.33 0 4.5 1.763 5.294 2.648h-.53c-.793-.44-2.805-1.324-4.5-1.324"></svg:path><svg:path fill="url(#tokenBrandedEqual2)" d="M11.206 17.029c1.694 0 5.12-.884 6.617-1.324l-2.647 2.912v-.794c-.264.175-1.376.53-3.706.53s-4.5-1.764-5.294-2.648h.53c.794.44 2.806 1.324 4.5 1.324"></svg:path><svg:path fill="url(#tokenBrandedEqual3)" d="M15.177 8.295H9.883a1.06 1.06 0 0 0-1.06 1.058v4.765c0 1.27 1.06 1.588 1.589 1.588h4.765c0-1.27-1.06-1.588-1.588-1.588h-1.06c-.529 0-1.588 0-1.588-2.117c0-1.695 1.06-2.118 1.589-2.118h.794c1.482 0 1.853-1.059 1.853-1.588"></svg:path><svg:path fill="url(#tokenBrandedEqual4)" d="M9.883 14.117c-.636 0-.97-.704-1.06-1.059v1.06c0 1.27 1.06 1.587 1.589 1.587h4.765c0-1.27-1.06-1.588-1.588-1.588z"></svg:path><svg:path fill="url(#tokenBrandedEqual5)" d="M9.883 9.883c-.636 0-.795.355-.795.53c0 .846.885 1.058 1.324 1.058h3.176c1.271 0 1.589 1.059 1.589 1.588H9.883c-.636 0-.97-.704-1.06-1.058V9.353c0-.847.705-1.058 1.06-1.058h5.294c0 1.27-1.06 1.588-1.588 1.588z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEqual0" x1="20.471" x2="3" y1="12.794" y2="13.059" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2DFAEE"></svg:stop><svg:stop offset="1" stop-color="#015BD5"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEqual1" x1="19.363" x2="4.134" y1="11.181" y2="11.49" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2AF0ED"></svg:stop><svg:stop offset="1" stop-color="#056BD7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEqual2" x1="18.545" x2="6.221" y1="11.181" y2="10.976" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#27E6EB"></svg:stop><svg:stop offset="1" stop-color="#0569D7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEqual3" x1="12.03" x2="12.03" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#22D3E8"></svg:stop><svg:stop offset="1" stop-color="#0A7CDA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEqual4" x1="20.25" x2="3.75" y1="13.799" y2="13.799" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#29EEEC"></svg:stop><svg:stop offset="1" stop-color="#035FD5"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEqual5" x1="14.913" x2="8.824" y1="11.471" y2="11.471" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#28EAEC"></svg:stop><svg:stop offset="1" stop-color="#015BD5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
