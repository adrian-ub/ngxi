import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMnwIcon],svg[token-branded-mnw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMnw0)" d="m6.06 6.474l-3.034 11.24c-.196.73.752 1.228 1.26.656l4.056-4.553l2.488 2.817a1.58 1.58 0 0 0 2.35 0l2.489-2.811l4.044 4.526c.514.572 1.456.074 1.26-.656L17.945 6.49a1.513 1.513 0 0 0-2.589-.593L12 9.693L8.654 5.892a1.514 1.514 0 0 0-2.589.582z"></svg:path><svg:path fill="url(#tokenBrandedMnw1)" d="M6.06 6.474L4.064 13.87a2.25 2.25 0 0 1 3.044-1.164c.53.248.942.72 1.234 1.111l2.488 2.806a1.576 1.576 0 0 0 2.35 0l2.489-2.806l3.255-3.7a4.625 4.625 0 0 1-6.93-.424L8.65 5.892a1.514 1.514 0 0 0-2.59.582"></svg:path><svg:path fill="url(#tokenBrandedMnw2)" d="m15.669 13.817l4.045 4.526c.513.572 1.455.074 1.26-.656l-2.05-7.57z"></svg:path><svg:path fill="url(#tokenBrandedMnw3)" d="m4.064 13.864l-1.038 3.844c-.196.73.752 1.228 1.26.656l4.056-4.552a3.1 3.1 0 0 0-1.335-1.15a2.25 2.25 0 0 0-2.456.474c-.21.208-.378.456-.492.728z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMnw0" x1="16.314" x2="15.69" y1="6.432" y2="10.842" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5083A9"></svg:stop><svg:stop offset="1" stop-color="#12132C"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMnw1" x1="19.249" x2="3.001" y1="12.983" y2="13.37" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1C2849"></svg:stop><svg:stop offset="1" stop-color="#5893BA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMnw2" x1="9.221" x2="11.438" y1="8.324" y2="19.244" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#13182F"></svg:stop><svg:stop offset="1" stop-color="#5284AC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMnw3" x1="7.129" x2="3.9" y1="12.874" y2="18.232" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1C2849"></svg:stop><svg:stop offset="1" stop-color="#436C92"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMnwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
