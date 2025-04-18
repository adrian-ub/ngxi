import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCyncIcon],svg[arcticons-cync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.838 39.162l4.876-4.876m20.6-20.6l4.89-4.89m-.042 30.366l-4.876-4.876M13.714 13.714L8.838 8.838M45.5 24h-6.912M9.412 24H2.5M24 2.5v6.912m0 29.176V45.5m7.076-15.935c-1.557 1.393-3.636 2.171-5.8 2.171c-4.613 0-8.352-3.463-8.352-7.736s3.739-7.736 8.351-7.736c2.164 0 4.244.778 5.8 2.17"></svg:path>`,
})
export class ArcticonsCyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
