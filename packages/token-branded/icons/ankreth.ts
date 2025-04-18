import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAnkrethIcon],svg[token-branded-ankreth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFE81C" d="M3.111 7.928v7.656c0 .61.3 1.178.789 1.483l7.567 4.711c.5.306 1.105.295 1.594-.027l7.073-4.678a1.75 1.75 0 0 0 .755-1.462V8.418c0-.6-.289-1.156-.755-1.461L13.022 2.25a1.46 1.46 0 0 0-1.533-.06L3.961 6.405a1.73 1.73 0 0 0-.85 1.522"></svg:path><svg:path fill="#8C800F" d="m12 14.223l-2.777-1.667L12 17z"></svg:path><svg:path fill="#332E06" d="m12.001 14.223l2.778-1.667L12 17z"></svg:path><svg:path fill="#8C800F" d="M12 10.334V6.445L9.223 12z"></svg:path><svg:path fill="#332E06" d="M12.001 10.334V6.445L14.779 12z"></svg:path><svg:path fill="#141302" d="M12.001 13.667v-3.333L14.779 12z"></svg:path><svg:path fill="#383306" d="M12 13.667v-3.333L9.223 12z"></svg:path></svg:g>`,
})
export class TokenBrandedAnkrethIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
