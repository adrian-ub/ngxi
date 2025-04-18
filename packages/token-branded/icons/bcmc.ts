import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBcmcIcon],svg[token-branded-bcmc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBcmc0)" fill-rule="evenodd" d="M12 19.941a7.942 7.942 0 1 0 0-15.883a7.942 7.942 0 0 0 0 15.883M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedBcmc1)" d="M12 6.705H8.824V12l1.058-.529V7.764H12a1.589 1.589 0 0 1 .704 3.013C9.792 12.222 6.812 13.583 3.88 15l.466.953l8.01-3.896s1.244-.53 1.599-.921A2.636 2.636 0 0 0 12 6.705m8.587 3.092l-.466-.953l-5.527 2.88a2.119 2.119 0 0 1-1.006 3.982H9.882v-1.763l-1.058.54v2.281h4.764a3.175 3.175 0 0 0 2.69-4.87z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBcmc0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FCAB2F"></svg:stop><svg:stop offset="1" stop-color="#E45E0E"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBcmc1" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FCAB2F"></svg:stop><svg:stop offset="1" stop-color="#E45E0E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBcmcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
