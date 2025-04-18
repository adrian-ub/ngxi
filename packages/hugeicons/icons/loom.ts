import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLoomIcon],svg[hugeicons-loom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-3V4m0 11v5m3-8h5M9 12H4m10.598-1.5l4.33-2.5M9.4 13.5L5.071 16m8.429-1.402l2.5 4.33M10.5 9.4L8 5.071m5.5 4.331l2.5-4.33m-5.5 9.526L8 18.929m6.598-5.429l4.33 2.5M9.4 10.5L5.071 8" color="currentColor"></svg:path>`,
})
export class HugeiconsLoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
