import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAcqIcon],svg[token-branded-acq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAcq0)" fill-rule="evenodd" d="M12 19.941a7.942 7.942 0 1 0 0-15.883a7.942 7.942 0 0 0 0 15.883M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:path fill="#44B4AC" d="M13.588 12.264v.794H6.706l3.97-6.352l2.118 3.44h-1.059l-1.059-1.852l-2.382 3.97z"></svg:path><svg:path fill="#44B4AC" d="M10.94 11.736v-.794h6.883l-3.97 6.353l-2.118-3.441h1.059l1.059 1.853l2.382-3.971z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAcq0" x1="15.971" x2="8.029" y1="4.059" y2="19.677" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#837DBA"></svg:stop><svg:stop offset=".5" stop-color="#0F67A3"></svg:stop><svg:stop offset="1" stop-color="#56BCAF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAcqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
