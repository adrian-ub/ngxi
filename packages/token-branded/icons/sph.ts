import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSphIcon],svg[token-branded-sph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSph0)" d="M12 13.125A5.063 5.063 0 1 0 12 3a5.063 5.063 0 0 0 0 10.125"></svg:path><svg:path fill="#CCB806" d="M8.062 18.188c2.486 0 4.5-.882 4.5-1.97c0-1.086-2.014-1.968-4.5-1.968c-2.485 0-4.5.882-4.5 1.969s2.015 1.968 4.5 1.968"></svg:path><svg:path fill="#BC266E" d="M15.938 18.188c2.485 0 4.5-.882 4.5-1.97c0-1.086-2.015-1.968-4.5-1.968c-2.486 0-4.5.882-4.5 1.969s2.014 1.968 4.5 1.968"></svg:path><svg:path fill="#F2C01C" d="M12 17.175c.36-.281.562-.607.562-.956s-.202-.675-.562-.956c-.36.28-.562.607-.562.956s.202.675.562.956"></svg:path><svg:path fill="#5DC9B5" d="M12 21c2.485 0 4.5-.881 4.5-1.969c0-1.087-2.015-1.968-4.5-1.968s-4.5.88-4.5 1.968S9.515 21 12 21"></svg:path><svg:path fill="#CF4E92" d="M16.067 18.187h-.13c-1.794 0-3.34-.46-4.066-1.125H12c1.794 0 3.341.462 4.067 1.125"></svg:path><svg:path fill="#DFE02A" d="M12.13 17.063c-.726.663-2.273 1.124-4.068 1.124h-.129c.726-.663 2.273-1.125 4.067-1.125z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSph0" x1="8.719" x2="15.519" y1="4.5" y2="20.194" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CCC"></svg:stop><svg:stop offset=".49" stop-color="#EDEDED"></svg:stop><svg:stop offset="1" stop-color="#C5C5C5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
