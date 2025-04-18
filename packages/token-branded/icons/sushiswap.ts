import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSushiswapIcon],svg[token-branded-sushiswap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSushiswap0)" fill-rule="evenodd" d="m20.625 14.451l-3.511 4.878c-.512.71-1.509 1.024-2.779.923c-1.764-.153-4.108-1.084-6.35-2.684a18 18 0 0 1-2.065-1.705c-1.188-1.146-2.06-2.338-2.528-3.402c-.511-1.168-.528-2.201-.017-2.912l3.52-4.878c.511-.71 1.5-1.024 2.778-.923c1.765.144 4.1 1.084 6.35 2.676c2.241 1.6 3.886 3.506 4.585 5.115q.09.207.16.408c.348 1 .308 1.877-.143 2.504" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M20.063 11.776c-.674-1.533-2.25-3.337-4.398-4.86c-2.14-1.525-4.364-2.43-6.043-2.566c-1.023-.085-1.832.101-2.241.669l-.017.033c-.384.568-.299 1.372.102 2.287c.673 1.54 2.25 3.344 4.39 4.868c2.138 1.525 4.363 2.43 6.042 2.566c1.005.076 1.798-.101 2.216-.635l.025-.042c.41-.56.324-1.389-.076-2.32m-3.145.034c-.188.262-.571.338-1.04.296c-.844-.068-1.952-.525-3.026-1.287s-1.866-1.66-2.199-2.43c-.187-.432-.238-.813-.05-1.076c.187-.262.57-.339 1.047-.305c.836.077 1.952.525 3.018 1.288c1.074.762 1.866 1.668 2.198 2.438c.197.432.248.813.052 1.076" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSushiswap0" x1="9.111" x2="14.823" y1="3.53" y2="20.494" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#27B0E6"></svg:stop><svg:stop offset=".044" stop-color="#49A1DB"></svg:stop><svg:stop offset=".118" stop-color="#7D8ACA"></svg:stop><svg:stop offset=".216" stop-color="#A279BD"></svg:stop><svg:stop offset=".296" stop-color="#BA6FB6"></svg:stop><svg:stop offset=".375" stop-color="#C26BB3"></svg:stop><svg:stop offset=".468" stop-color="#D563AD"></svg:stop><svg:stop offset=".58" stop-color="#E65BA7"></svg:stop><svg:stop offset=".709" stop-color="#F156A3"></svg:stop><svg:stop offset=".823" stop-color="#F853A1"></svg:stop><svg:stop offset="1" stop-color="#FA52A0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSushiswapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
