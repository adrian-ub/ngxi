import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKronIcon],svg[arcticons-kron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.286 24.543a2.27 2.27 0 0 1 2.272-2.272h0m-2.272 0v6.021m15.345 0v-3.75a2.27 2.27 0 0 0-2.272-2.271h0a2.27 2.27 0 0 0-2.272 2.272m0 3.749v-6.021m-18.038-3.068v9.089m0-3.166l4.885-5.892m0 9.058a6.8 6.8 0 0 1-2.453-1.92a6.8 6.8 0 0 1-1.289-2.624m9.984.795a2.272 2.272 0 1 1 4.544 0v1.477a2.272 2.272 0 1 1-4.544 0z"></svg:path><svg:circle cx="36.201" cy="28.047" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsKronIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
