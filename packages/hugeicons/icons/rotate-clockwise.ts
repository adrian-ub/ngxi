import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateClockwiseIcon],svg[hugeicons-rotate-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 2v3.132c0 .294.367.427.555.201A9.97 9.97 0 0 1 12.005 2C17.525 2 22 6.477 22 12c0 3.958-2.299 7.38-5.633 9m-4.632 1q.7 0 1.376-.092M2.265 8.667Q2.097 9.263 2 9.869m.035 3.669q.105.6.274 1.186m1.524 3.272q.358.531.774 1.019M7.43 21.36q.53.304 1.103.547" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateClockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
