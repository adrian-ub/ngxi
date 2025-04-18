import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStraxIcon],svg[token-branded-strax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedStrax0)" d="M11.72 3.874a.53.53 0 0 1 .56 0l8.471 5.294a.53.53 0 0 1-.021.911l-8.47 4.765a.53.53 0 0 1-.52 0l-7.681-4.32v1.43l7.94 4.467l8.212-4.616a.53.53 0 0 1 .718.197c.047.08.07.171.07.263v2.383a.53.53 0 0 1-.258.455l-8.471 5.03a.53.53 0 0 1-.53.005l-8.47-4.765a.53.53 0 0 1 .519-.921l8.206 4.611l7.946-4.706v-1.191l-7.682 4.32a.53.53 0 0 1-.518 0L3.27 12.72a.53.53 0 0 1-.27-.46V9.612a.53.53 0 0 1 .249-.45l8.47-5.294zM4.566 9.592L12 13.774l7.433-4.182L12 4.95z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedStrax0" x1="12" x2="12" y1="3.794" y2="20.206" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1B71BD"></svg:stop><svg:stop offset="1" stop-color="#10449E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedStraxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
