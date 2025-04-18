import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWlitiIcon],svg[token-branded-wliti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedWliti0)" d="M8.062 12.872v5.738L3 15.825zm3.246-1.912l-1.558.927V15.6l4.787-2.784z"></svg:path><svg:path fill="url(#tokenBrandedWliti1)" d="M14.537 12.816L9.75 15.6v-3.713L8.063 12.9v5.704l3.245-2.076l4.843-2.784z"></svg:path><svg:path fill="url(#tokenBrandedWliti2)" d="M8.062 7.472v5.45L3 15.826V4.688zm1.688.703v3.712l1.558-.928l3.223 1.857V5.39zm6.401 5.569l-4.843 2.784l4.843 2.785L21 16.528z"></svg:path><svg:path fill="url(#tokenBrandedWliti3)" d="m9.693 8.175l6.464 3.712L21 9.103l-6.463-3.712z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedWliti0" x1="5.045" x2="21.628" y1="17.968" y2="9.465" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#08A5B1"></svg:stop><svg:stop offset=".67" stop-color="#6FC6A6"></svg:stop><svg:stop offset="1" stop-color="#CAE5C2"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedWliti1" x1="-.129" x2="17.771" y1="15.197" y2="3.7" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#222C5F"></svg:stop><svg:stop offset=".45" stop-color="#50489D"></svg:stop><svg:stop offset="1" stop-color="#2D7DC1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedWliti2" x1="2.533" x2="18.182" y1="14.548" y2="8.828" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4BA5DC"></svg:stop><svg:stop offset=".7" stop-color="#79CFE3"></svg:stop><svg:stop offset="1" stop-color="#90D7EE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedWliti3" x1="11.071" x2="19.599" y1="5.981" y2="11.336" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#50489D"></svg:stop><svg:stop offset=".7" stop-color="#2D7DC1"></svg:stop><svg:stop offset="1" stop-color="#44BAEB"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedWlitiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
