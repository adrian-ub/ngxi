import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStrpIcon],svg[token-branded-strp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedStrp0)" d="M5.813 18.188A8.56 8.56 0 0 1 3 11.826a8.57 8.57 0 0 1 3.808-7.139c-.461 1.03-.995 2.52-.995 3.724c0 1.992 1.687 5.119 4.5 5.693l.562-.855c.467.663 1.688 2.103 2.813 2.56a4 4 0 0 1-4.22 1.135l.282-.849a2.1 2.1 0 0 0-1.687-.855c-1.126 0-2.25.855-2.25 2.278z"></svg:path><svg:path fill="url(#tokenBrandedStrp1)" d="M5.824 8.085a8.56 8.56 0 0 0-1.699 5.136a8.6 8.6 0 0 0 1.367 4.663A8.55 8.55 0 0 1 3 11.826a8.57 8.57 0 0 1 3.808-7.139a11 11 0 0 0-.984 3.398"></svg:path><svg:path fill="url(#tokenBrandedStrp2)" d="M18.187 5.813A8.56 8.56 0 0 1 21 12.174a8.57 8.57 0 0 1-3.808 7.139c.461-1.03.995-2.52.995-3.724c0-1.992-1.687-5.119-4.5-5.693l-.562.855c-.467-.663-1.687-2.103-2.812-2.56a3.99 3.99 0 0 1 4.218-1.135l-.281.849c.186.281.787.855 1.688.855c1.124 0 2.25-.855 2.25-2.278z"></svg:path><svg:path fill="url(#tokenBrandedStrp3)" d="M18.176 15.913a8.54 8.54 0 0 0 1.699-5.136a8.6 8.6 0 0 0-1.367-4.663A8.55 8.55 0 0 1 21 12.172a8.57 8.57 0 0 1-3.808 7.139c.51-1.072.842-2.22.984-3.398"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedStrp0" x1="3" x2="19.543" y1="13.932" y2="20.622" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0367AB"></svg:stop><svg:stop offset="1" stop-color="#0C99D7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStrp1" x1="18.953" x2="18.331" y1="5.005" y2="17.786" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#076EB0"></svg:stop><svg:stop offset="1" stop-color="#199CD4"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStrp2" x1="21" x2="4.457" y1="10.068" y2="3.378" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FBB20B"></svg:stop><svg:stop offset="1" stop-color="#FEFF42"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedStrp3" x1="17.625" x2="19.926" y1="19.023" y2="7.942" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F38F12"></svg:stop><svg:stop offset="1" stop-color="#F09508"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedStrpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
