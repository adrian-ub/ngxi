import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOrnIcon],svg[token-branded-orn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedOrn0)" d="M10.43 4.248c-2.116 0-4.63 1.434-5.562 2.716c1.765-1.131 4.583-1.603 5.45-1.483c3.514.564 4.69 3.715 4.868 5.33c1.342.528 3.994.688 2.572-2.12c-1.773-3.5-4.732-4.443-7.327-4.443"></svg:path><svg:path fill="url(#tokenBrandedOrn1)" d="M9.125 17.327c3.376 0 6.114-2.699 6.114-6.028S12.5 5.271 9.125 5.271S3.01 7.971 3.01 11.3c0 3.33 2.737 6.028 6.114 6.028"></svg:path><svg:path fill="#25253B" d="M10.504 16.65a4.392 4.392 0 1 0 0-8.784a4.392 4.392 0 0 0 0 8.785"></svg:path><svg:path fill="url(#tokenBrandedOrn2)" d="M20.455 10.864c.83-.582.542-1.758.245-2.155c-.456-.614-1.096-.69-1.354-.66c-2.046.231-3.718 2.5-4.37 3.616l2.564 1.777c.12-.168.436-.672.947-1.258c.62-.71 1.449-.956 1.968-1.32"></svg:path><svg:path fill="url(#tokenBrandedOrn3)" d="M18.451 11.263c.44-.913-.334-1.724-.787-1.926c-.698-.313-1.23-.09-1.388 0c-1.673 1.2-2.14 4.083-2.165 5.374l3.407.431c.023-.205.073-.827.088-1.665c.016-.838.635-1.777.845-2.214"></svg:path><svg:path fill="url(#tokenBrandedOrn4)" d="M10.53 19.752c-4.675 0-7.737-4.224-7.52-8.268c1.51 5.05 5.19 6.111 7.52 5.567c1.865-.435 3.538-2.319 4.194-3.24c.267-.375 1.262-.516 2.089-.065s1.025 1.442.827 1.81c-1.975 3.69-5.328 4.196-7.11 4.196"></svg:path><svg:path fill="url(#tokenBrandedOrn5)" d="M17.997 7.349a1.55 1.55 0 1 0 0-3.101a1.55 1.55 0 0 0 0 3.1"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedOrn0" x1="4.677" x2="21.911" y1="7.849" y2="11.592" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5D86BC"></svg:stop><svg:stop offset=".614" stop-color="#6CC3D7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOrn1" x1="3.962" x2="19.506" y1="9.172" y2="15.587" gradientUnits="userSpaceOnUse"><svg:stop offset=".226" stop-color="#94D0DA"></svg:stop><svg:stop offset="1" stop-color="#3F65AE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOrn2" x1="16.928" x2="8.951" y1="4.001" y2="18.835" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F57240"></svg:stop><svg:stop offset="1" stop-color="#FBE18C"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOrn3" x1="4.594" x2="17.611" y1="13.56" y2="3.923" gradientUnits="userSpaceOnUse"><svg:stop offset=".212" stop-color="#583D90"></svg:stop><svg:stop offset="1" stop-color="#DC719B"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOrn4" x1="2.874" x2="20.644" y1="5.051" y2="8.847" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4FA2C5"></svg:stop><svg:stop offset="1" stop-color="#FD7813"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOrn5" x1="18.901" x2="17.068" y1="4.767" y2="6.905" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B1599B"></svg:stop><svg:stop offset="1" stop-color="#5B418B"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedOrnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
