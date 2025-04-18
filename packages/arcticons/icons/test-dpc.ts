import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTestDpcIcon],svg[arcticons-test-dpc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.829 14.197v19.606L24 44.5L6.172 33.803V14.197L24 3.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 34.063l8.863-5.275v-9.576L24 13.937l-8.863 5.275v9.576zm8.909-14.817l8.92 5.343m-26.432 14.67L24 34.063m-8.863-14.885V8.843"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.76 28.235v-5.304q0-1.05 1.063-1.05h6.273q1.144 0 1.144 1.05v5.304q0 1.065-1.063 1.064h-6.354q-1.063 0-1.063-1.064"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.887 21.882c-.539-4.24 4.765-4.24 4.226 0M24 23.995c.875 0 1.588.713 1.588 1.588s-.713 1.589-1.588 1.589s-1.588-.714-1.588-1.589s.713-1.588 1.588-1.588"></svg:path>`,
})
export class ArcticonsTestDpcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
