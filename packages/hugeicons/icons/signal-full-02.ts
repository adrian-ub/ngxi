import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSignalFull02Icon],svg[hugeicons-signal-full-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 17v-1c0-.943 0-1.414-.293-1.707S5.943 14 5 14s-1.414 0-1.707.293S3 15.057 3 16v1c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17m7 0v-5c0-.943 0-1.414-.293-1.707S12.943 10 12 10s-1.414 0-1.707.293S10 11.057 10 12v5c0 .943 0 1.414.293 1.707S11.057 19 12 19s1.414 0 1.707-.293S14 17.943 14 17m7 0V8c0-.943 0-1.414-.293-1.707S19.943 6 19 6s-1.414 0-1.707.293S17 7.057 17 8v9c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17" color="currentColor"></svg:path>`,
})
export class HugeiconsSignalFull02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
