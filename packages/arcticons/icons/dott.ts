import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDottIcon],svg[arcticons-dott-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.466 18.575V27.5a1.5 1.5 0 0 0 1.5 1.5h.45m-1.95-7.95h1.95m2.713-2.475V27.5a1.5 1.5 0 0 0 1.5 1.5h.45m-1.95-7.95h1.95m-18.158 3a3 3 0 0 0-3-3h0a3 3 0 0 0-3 3V26a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3m0 0v-9m2.777 7.05a3 3 0 1 1 6 0V26a3 3 0 1 1-6 0z"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDottIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
