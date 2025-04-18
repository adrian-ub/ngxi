import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSignalLow02Icon],svg[hugeicons-signal-low-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 19h-3m-4 0h-3m-4-2v-1c0-.943 0-1.414-.293-1.707S5.943 14 5 14s-1.414 0-1.707.293S3 15.057 3 16v1c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17" color="currentColor"></svg:path>`,
})
export class HugeiconsSignalLow02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
