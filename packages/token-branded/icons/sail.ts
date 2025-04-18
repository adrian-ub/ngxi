import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSailIcon],svg[token-branded-sail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSail0)" d="M16.378 18.753c-5.604-6.976-3.892-11.909-2.335-13.504c-4.204 3.828-2.725 9.846-1.46 12.375c1.168.677 3.016 1.032 3.795 1.124z"></svg:path><svg:path fill="url(#tokenBrandedSail1)" d="M6.454 15.376C6.687 10.424 11.61 5.063 14.043 3C9.139 9.3 10.638 15.186 12 17.341z"></svg:path><svg:path fill="url(#tokenBrandedSail2)" d="M4.703 18.47v-1.411s.292-.56 1.167-.56c2.238 0 8.942 3.075 11.092 3.094c1.24.01 1.946-.9 2.335-1.405c-.39.749-1.537 2.335-3.405 2.335c-2.335 0-6.63-2.618-10.022-2.618c-.7 0-1.07.375-1.167.565"></svg:path><svg:path fill="url(#tokenBrandedSail3)" d="M6.036 18.16c-1.168 0-1.139 1.366-.847 1.896c0-.267.243-.948.847-.948c.856-.005 6.44 1.192 9.37 1.892c-2.677-.948-7.298-2.84-9.37-2.84"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSail0" x1="11.996" x2="11.996" y1="3.007" y2="21.001" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF9C00"></svg:stop><svg:stop offset=".54" stop-color="#FED087"></svg:stop><svg:stop offset="1" stop-color="#FF9D00"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSail1" x1="18.735" x2="14.393" y1="3.354" y2="21.009" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00116A"></svg:stop><svg:stop offset=".63" stop-color="#003180"></svg:stop><svg:stop offset=".78" stop-color="#0094C6"></svg:stop><svg:stop offset="1" stop-color="#00CBEE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSail2" x1="4.411" x2="19.345" y1="6.765" y2="6.969" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0064A3"></svg:stop><svg:stop offset=".16" stop-color="#00B1DA"></svg:stop><svg:stop offset=".46" stop-color="#001169"></svg:stop><svg:stop offset="1" stop-color="#011D6D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSail3" x1="4.985" x2="14.661" y1="19.137" y2="21.837" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0064A3"></svg:stop><svg:stop offset=".16" stop-color="#00B1DA"></svg:stop><svg:stop offset=".51" stop-color="#001169"></svg:stop><svg:stop offset="1" stop-color="#011D6D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
