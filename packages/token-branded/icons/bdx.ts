import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBdxIcon],svg[token-branded-bdx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#35AF3B" fill-rule="evenodd" d="M12 20.5a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m0 .5a8.997 8.997 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedBdx0)" fill-rule="evenodd" d="M17 5.75v8.75a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1V9c0-.55.45-1 1-1h5.19zm-5.5 4.75a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.5V13a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedBdx1)" d="M15 13a.5.5 0 0 1-.5.5h-3.53c-.47 0-1.04-.034-1.47-.75v1.75c0 .55.45 1 1 1H14c.62 0 1-.5 1-1z"></svg:path><svg:path fill="url(#tokenBrandedBdx2)" d="M13 8h-2.5a1 1 0 0 0-1 1v3.75c.43.714 1 .75 1.47.75H12a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 .5-.5h1z"></svg:path><svg:path fill="url(#tokenBrandedBdx3)" fill-rule="evenodd" d="M6.5 8.25V17c0 .55.45 1 1 1H13a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1H7.81zM12 13a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedBdx4)" d="M6.5 15.25V17c0 .55.45 1 1 1H11c.6 0 1-.25 1-1v-1.5a.5.5 0 0 1-.5.5H7.75c-.5 0-.955-.16-1.25-.75"></svg:path><svg:path fill="url(#tokenBrandedBdx5)" d="M10.5 10.5H7.81L6.5 8.25v7c.295.59.75.75 1.25.75H9a.5.5 0 0 1-.5-.5V13a.5.5 0 0 1 .5-.5h1.5z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBdx0" x1="18" x2="18" y1="4.384" y2="18.692" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#72A8CF"></svg:stop><svg:stop offset="1" stop-color="#1071AB"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBdx1" x1="21" x2="5.454" y1="14.455" y2="14.455" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0F6192"></svg:stop><svg:stop offset="1" stop-color="#1473AD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBdx2" x1="8.142" x2="7.621" y1=".545" y2="21.019" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#72A8CF"></svg:stop><svg:stop offset="1" stop-color="#116394"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBdx3" x1="12" x2="12" y1="3.001" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DD21"></svg:stop><svg:stop offset="1" stop-color="#34B238"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBdx4" x1="21" x2="3" y1="12.818" y2="12.818" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#34A93A"></svg:stop><svg:stop offset="1" stop-color="#34B537"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBdx5" x1="7" x2="7" y1="9.751" y2="16.001" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#35E11D"></svg:stop><svg:stop offset="1" stop-color="#31A137"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBdxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
