import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsClock04Icon],svg[hugeicons-clock-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2C7.522 2 3.774 4.943 2.5 9H5"></svg:path><svg:path d="M12 8v4l2 2M2 12q0 .505.045 1M9 22a10 10 0 0 1-1-.392M3.21 17a11 11 0 0 1-.515-1.154m2.136 3.46q.46.495.977.923"></svg:path></svg:g>`,
})
export class HugeiconsClock04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
