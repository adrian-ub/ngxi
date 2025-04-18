import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignInSqureIcon],svg[lets-icons-sign-in-squre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M7 7.132v-.52c0-2.146 0-3.219.69-3.817s1.751-.446 3.876-.143l4.282.612c2.457.351 3.685.526 4.418 1.372S21 6.723 21 9.204v5.592c0 2.481 0 3.722-.734 4.568c-.733.846-1.961 1.021-4.417 1.372l-4.283.612c-2.125.303-3.187.455-3.876-.143S7 19.534 7 17.388v-.322"></svg:path><svg:path fill="currentColor" d="m16 12l.78-.625l.5.625l-.5.625zM4 13a1 1 0 1 1 0-2zm8.78-6.625l4 5l-1.56 1.25l-4-5zm4 6.25l-4 5l-1.56-1.25l4-5zM16 13H4v-2h12z"></svg:path></svg:g>`,
})
export class LetsIconsSignInSqureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
