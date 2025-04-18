import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChimneyIcon],svg[hugeicons-chimney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.5 22l-1.117-5.024a37 37 0 0 1-.883-8.049a.93.93 0 0 0-.928-.927H7.428a.927.927 0 0 0-.927.927a37 37 0 0 1-.883 8.049L4.5 22M3 22h14m0-20h-4a3 3 0 0 0-3 3m10-3h1m-8 3h6" color="currentColor"></svg:path>`,
})
export class HugeiconsChimneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
