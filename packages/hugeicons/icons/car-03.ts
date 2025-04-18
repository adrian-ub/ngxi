import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCar03Icon],svg[hugeicons-car-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.007 17a2 2 0 1 1-4 0a2 2 0 0 1 4 0m10 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M2.007 10h16m-16 0c0 .78-.02 3.04.004 5.26c.036.72.156 1.32 2.998 1.74m-3.002-7c.216-1.74 1.155-3.8 1.635-4.58M9.007 10V5m5.99 12H9.002M2.022 5H12.24s.54 0 1.02.048c.899.084 1.654.492 2.41 1.512c.8 1.08 1.414 2.448 2.23 3.18c1.355 1.216 3.933.84 4.077 3.42c.036 1.32.036 2.76-.024 3c-.097.707-.642.822-1.32.84c-.588.016-1.297-.028-1.642 0"></svg:path></svg:g>`,
})
export class HugeiconsCar03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
