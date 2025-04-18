import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSelfprivacyIcon],svg[arcticons-selfprivacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.32 24.08a1.78 1.78 0 0 0-1.11 2.37c.16.427.47.782.87 1q-.21 1.41-.6 2.78h2.56a16.7 16.7 0 0 0-.58-2.72a2.06 2.06 0 0 0 1-1.62a1.74 1.74 0 0 0-2.14-1.81"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 17h17.58l5.7 6.25v9.64H8.5v2.61l-3-2.79z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 32.89v5.61c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4h-26c-2.2 0-4 1.8-4 4V17"></svg:path>`,
})
export class ArcticonsSelfprivacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
