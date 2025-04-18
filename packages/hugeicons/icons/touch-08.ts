import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch08Icon],svg[hugeicons-touch-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.78 13.957V9.493m0 0V3.978c0-.82.683-1.48 1.503-1.48s1.466.66 1.466 1.48v3.996m-2.97 1.52c-1.314 1.19-2.73 2.694-2.92 3.08c-.886 1.348-.793 2.001.195 3.652a41 41 0 0 0 2.033 3.032c.67.759.537.76 1.51 1.472c.867.602 2.667 1.022 6.887.602c3.437-.53 4.26-3.53 4.243-4.963v-3.54c.214-2.942-1.016-3.074-3.25-3.364m-5.728-1.491v2.523m0-2.523c.557-.909 2.582-.541 2.976 1.174m.036 1.345v-1q0-.119-.015-.236m-.02-.109l.004.022q.01.043.016.087m-.02-.109q.005.053.02.11m-.02-.11c-.14-1.196 2.891-.904 3.015 1.2v1.142" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
