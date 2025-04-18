import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoorepayIcon],svg[arcticons-moorepay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 28.061V22.83a3.17 3.17 0 0 1 3.17-3.17h0a3.17 3.17 0 0 1 3.172 3.17v5.232"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.842 22.83a3.17 3.17 0 0 1 3.17-3.172h0a3.17 3.17 0 0 1 3.172 3.171v5.232m1.974-3.171a3.17 3.17 0 0 0 3.171 3.171h0a3.17 3.17 0 0 0 3.171-3.17v-2.062a3.17 3.17 0 0 0-3.17-3.17h0a3.17 3.17 0 0 0-3.172 3.17m0 0v9.513"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMoorepayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
