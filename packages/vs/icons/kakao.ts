import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsKakaoIcon],svg[vs-kakao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 12q243 0 449.5 94.5t326.5 257T1792 718t-120 355t-326 257.5t-450 94.5q-77 0-159-11q-356 247-379 250q-11 4-21-1q-4-3-6-8t-2-9v-4q6-39 91-325q-193-96-306.5-254.5T0 718q0-192 120-354.5t326.5-257T896 12"></svg:path>`,
})
export class VsKakaoIcon {
  readonly viewBox = input("0 0 1792 1664")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
