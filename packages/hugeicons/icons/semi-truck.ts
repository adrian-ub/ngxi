import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSemiTruckIcon],svg[hugeicons-semi-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 13.5h-1c-.943 0-1.414 0-1.707-.293S16 12.443 16 11.5v-3m3 5v-5m0 5c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-.5M16 8.5h-3m3 0h3m-6 0v10h2.5M13 8.5v-3h3c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C19 7.102 19 7.568 19 8.5m-6-3c0-.943 0-1.414-.293-1.707S11.943 3.5 11 3.5m-3 15h5v-5H4c-.943 0-1.414 0-1.707.293S2 14.557 2 15.5v1c0 .943 0 1.414.293 1.707S3.057 18.5 4 18.5"></svg:path><svg:path d="M19.5 18.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 18.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsSemiTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
