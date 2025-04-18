import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedYamIcon],svg[token-branded-yam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedYam0)" d="M3.515 11.65a4 4 0 0 1-.47-1.916c3.221-2.133 9.812-6.423 10.4-6.504c.409-.07.83-.004 1.199.186c5.02 5.762 6.07 10.578 6.324 13.707c.118.822-.03 2.64-1.533 3.375c-1.88.928-3.487-.222-4.791-.531c-1.299-.316-3.957-1.33-5.188-2.121c-1.224-.797-1.712-1.403-2.38-2.028c-.674-.63-3.054-3.283-3.561-4.167"></svg:path><svg:path fill="#EBDDD5" fill-opacity=".7" d="M16.684 6.729c.241-.334.643.185.816.482c1.49 1.91 2.844 6.102 2.789 6.102c-.415-1.335-3.895-6.17-3.605-6.584"></svg:path><svg:path fill="#E6DE95" d="M9.104 7.629c3.033-1.847 5.232-3.789 4.91-4.337c-.32-.548-3.039.505-6.072 2.352S2.71 9.432 3.032 9.98c.32.548 3.039-.505 6.072-2.351"></svg:path><svg:path fill="url(#tokenBrandedYam1)" d="M3.17 10.73c-.15-.137-.056-.347.012-.434c.47.223 2.09-.197 2.844-.432c-.89.34-2.708 1.001-2.857.865"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedYam0" x1="18.91" x2="8.168" y1="6.797" y2="17.985" gradientUnits="userSpaceOnUse"><svg:stop offset=".01" stop-color="#F374AB"></svg:stop><svg:stop offset=".3" stop-color="#ED4892"></svg:stop><svg:stop offset=".91" stop-color="#A71C2D"></svg:stop><svg:stop offset="1" stop-color="#B91F2B"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYam1" x1="3.169" x2="5.556" y1="10.55" y2="10.562" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EAC4CF"></svg:stop><svg:stop offset="1" stop-color="#E76D9E" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedYamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
