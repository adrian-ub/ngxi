import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBibliotheekWiseIcon],svg[arcticons-bibliotheek-wise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.078 17.031c4.35 4.349 4.932 9.494-.469 14.894c-5.4 5.4-21.374 15.576-31.123 5.827S3.808 13.3 8.306 8.802c6.921-6.92 25.858 1.315 32.772 8.23"></svg:path><svg:circle cx="17.682" cy="24.34" r="3.776" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.72 18.646l5.025-5.026a1.326 1.326 0 0 1 1.875 0l5.026 5.026m0 11.389L18.62 35.06a1.326 1.326 0 0 1-1.875 0l-5.026-5.026"></svg:path>`,
})
export class ArcticonsBibliotheekWiseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
