import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignInSqureLightIcon],svg[lets-icons-sign-in-squre-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M7 7.132v-.52c0-2.146 0-3.219.69-3.817s1.751-.446 3.876-.143l4.282.612c2.457.351 3.685.526 4.418 1.372S21 6.723 21 9.204v5.592c0 2.481 0 3.722-.734 4.568c-.733.846-1.961 1.021-4.417 1.372l-4.283.612c-2.125.303-3.187.455-3.876-.143S7 19.534 7 17.388v-.322"></svg:path><svg:path fill="currentColor" d="m16 12l.39-.312l.25.312l-.25.312zm-12 .5a.5.5 0 0 1 0-1zm8.39-5.812l4 5l-.78.624l-4-5zm4 5.624l-4 5l-.78-.624l4-5zM16 12.5H4v-1h12z"></svg:path></svg:g>`,
})
export class LetsIconsSignInSqureLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
