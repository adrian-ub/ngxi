import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSlowWindsIcon],svg[hugeicons-slow-winds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 5.632a3.135 3.135 0 0 0-3.727 0a1.93 1.93 0 0 1-2.29-.018c-1.136-.819-2.59-.819-3.71 0c-.702.502-1.588.502-2.273 0M3 9.377a3.3 3.3 0 0 0 3.832 0a2 2 0 0 1 2.336 0c1.169.818 2.68.837 3.832.018m8 5.228a3.135 3.135 0 0 0-3.727 0a1.9 1.9 0 0 1-2.273 0c-1.136-.818-2.607-.837-3.727-.018c-.702.502-1.588.502-2.273 0m-6 3.772a3.3 3.3 0 0 0 3.832 0a2 2 0 0 1 2.336 0c1.169.818 2.68.837 3.832.018" color="currentColor"></svg:path>`,
})
export class HugeiconsSlowWindsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
