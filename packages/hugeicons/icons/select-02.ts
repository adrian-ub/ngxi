import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSelect02Icon],svg[hugeicons-select-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 2v6M2 5h6m12 13V7M7 20h11m0-15h-6m-7 7v6M18 5c0-.943 0-1.414.293-1.707S19.057 3 20 3s1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7s-1.414 0-1.707-.293S18 5.943 18 5m0 15c0-.943 0-1.414.293-1.707S19.057 18 20 18s1.414 0 1.707.293S22 19.057 22 20s0 1.414-.293 1.707S20.943 22 20 22s-1.414 0-1.707-.293S18 20.943 18 20M3 20c0-.943 0-1.414.293-1.707S4.057 18 5 18s1.414 0 1.707.293S7 19.057 7 20s0 1.414-.293 1.707S5.943 22 5 22s-1.414 0-1.707-.293S3 20.943 3 20" color="currentColor"></svg:path>`,
})
export class HugeiconsSelect02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
