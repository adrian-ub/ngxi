import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCtrIcon],svg[token-branded-ctr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCtr0)" d="M16.701 11.469a5.373 5.373 0 0 1-4.982 7.306c-2.954 0-5.347-2.404-5.347-5.363a5.352 5.352 0 0 1 6.168-5.305l1.398-4.203A8.455 8.455 0 0 0 3 11.998c0 4.68 3.78 8.471 8.439 8.471a8.455 8.455 0 0 0 8.418-9z"></svg:path><svg:path fill="url(#tokenBrandedCtr1)" d="M18.088 10.41a2.912 2.912 0 1 0 0-5.823a2.912 2.912 0 0 0 0 5.824"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCtr0" x1="18.604" x2="6.611" y1="8.044" y2="18.357" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6C7AF1"></svg:stop><svg:stop offset=".35" stop-color="#8958EB"></svg:stop><svg:stop offset="1" stop-color="#C746A6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCtr1" x1="18.088" x2="18.088" y1="4.587" y2="10.411" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#32C5FF"></svg:stop><svg:stop offset="1" stop-color="#904EE8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCtrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
