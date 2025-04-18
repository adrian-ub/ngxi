import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinebitlightIcon],svg[arcticons-linebitlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.48 39.46a3 3 0 0 1 3-3H24a12.39 12.39 0 0 0 0-24.78h0A12.39 12.39 0 0 0 11.61 24v3a3 3 0 0 1-6.08 0v-3A18.48 18.48 0 0 1 24 5.49h0A18.48 18.48 0 0 1 42.48 24v0h0A18.48 18.48 0 0 1 24 42.51H8.53a3 3 0 0 1-3-3ZM16.9 28.62V24a7.1 7.1 0 0 1 7.1-7.1h0a7.1 7.1 0 0 1 7.1 7.1h0a7.1 7.1 0 0 1-7.1 7.1h-4.62a2.48 2.48 0 0 1-2.48-2.46Z"></svg:path>`,
})
export class ArcticonsLinebitlightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
