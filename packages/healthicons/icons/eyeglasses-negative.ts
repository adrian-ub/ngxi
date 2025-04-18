import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsEyeglassesNegativeIcon],svg[healthicons-eyeglasses-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsEyeglassesNegative0)" clip-rule="evenodd"><svg:path d="M8 19a2 2 0 0 1 2-2h8.7a2 2 0 0 1 1.992 2.19l-.572 6A2 2 0 0 1 18.13 27H10a2 2 0 0 1-2-2zm9 2.5c0 1.38-.895 2.5-2 2.5s-2-1.12-2-2.5s.895-2.5 2-2.5s2 1.12 2 2.5M29.3 17a2 2 0 0 0-1.992 2.19l.572 6A2 2 0 0 0 29.87 27H38a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm3.7 7c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5s-2 1.12-2 2.5s.895 2.5 2 2.5"></svg:path><svg:path d="M48 0H0v48h48zM24 40c6.326 0 11.795-3.672 14.392-9h2.196c-2.73 6.464-9.13 11-16.588 11S10.143 37.464 7.412 31h2.197c2.596 5.328 8.065 9 14.391 9m0-32c-4.576 0-8.703 1.92-11.619 5h-2.63C13.043 8.742 18.201 6 24 6s10.957 2.742 14.249 7h-2.63C32.703 9.92 28.576 8 24 8m-1.343 10.4q.072.477.026.98l-.572 6A4 4 0 0 1 18.13 29H10a4 4 0 0 1-4-4v-5H5v-5h13.7c1.224 0 2.31.546 3.04 1.4h4.52A3.99 3.99 0 0 1 29.3 15H43v5h-1v5a4 4 0 0 1-4 4h-8.13a4 4 0 0 1-3.981-3.62l-.572-6a4 4 0 0 1 .026-.98zm7.28 13.75a1 1 0 0 1-.588 1.287c-2.12.79-3.849 1.267-5.551 1.288c-1.727.021-3.336-.426-5.226-1.321a1 1 0 0 1 .856-1.808c1.717.814 3.018 1.146 4.345 1.13c1.35-.017 2.818-.395 4.878-1.163a1 1 0 0 1 1.286.588"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsEyeglassesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsEyeglassesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
