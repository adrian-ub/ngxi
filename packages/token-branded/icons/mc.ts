import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMcIcon],svg[token-branded-mc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMc0)" fill-rule="evenodd" d="M12 3c4.961 0 9 4.039 9 9s-4.039 9-9 9s-9-4.039-9-9s4.039-9 9-9m0 12.937c-1.125-1-1.687-2.306-1.687-3.937S10.875 9.064 12 8.062c1.125 1.002 1.687 2.307 1.687 3.938s-.562 2.908-1.687 3.937" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedMc1)" d="M3.254 14.153c.034.056 2.008 3.527 5.231 3.47c1.052-.016 2.216-.702 3.516-1.687c1.125-1.001 1.687-2.306 1.687-3.937c0-1.632-.562-2.937-1.687-3.938c0 0 1.811-1.727 3.937-1.687c1.665.028 3.544 1.12 4.939 4.123a9.013 9.013 0 0 1-8.876 10.48a8.96 8.96 0 0 1-8.747-6.824"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMc0" x1="12" x2="12" y1="3" y2="17.906" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F4C251"></svg:stop><svg:stop offset=".89" stop-color="#E47236"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMc1" x1="12.125" x2="12.125" y1="6.374" y2="20.976" gradientUnits="userSpaceOnUse"><svg:stop offset=".15" stop-color="#E1602B"></svg:stop><svg:stop offset="1" stop-color="#EDAD3F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
