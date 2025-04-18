import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHouse03Icon],svg[hugeicons-house-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2 10l5-6m0 0l5.414 5.414c.29.29.434.434.617.51c.184.076.389.076.797.076H22l-3.8-4.56c-.59-.708-.885-1.062-1.288-1.251C16.508 4 16.048 4 15.127 4z"></svg:path><svg:path d="M11 8v12H3V8.857M11 20h10V9M4 7.5V4m3.008 8h-.009M7 20v-4m8-2h2"></svg:path></svg:g>`,
})
export class HugeiconsHouse03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
