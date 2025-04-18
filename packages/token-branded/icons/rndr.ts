import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRndrIcon],svg[token-branded-rndr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRndr0)" fill-rule="evenodd" d="M12 3.562a8.437 8.437 0 1 1-6.806 3.454a1.682 1.682 0 0 0 2.869-1.204a1.687 1.687 0 1 0-3.212.72A9 9 0 1 0 12.001 3zM6.375 6.937a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m5.625 9a3.937 3.937 0 1 0 0-7.874a3.937 3.937 0 0 0 0 7.874" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRndr0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E92121"></svg:stop><svg:stop offset="1" stop-color="#9C0403"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRndrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
