import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTap08Icon],svg[hugeicons-tap-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.78 13.957V9.493m0 0V3.978c0-.82.684-1.48 1.503-1.48c.82 0 1.466.66 1.466 1.48v3.996m-2.968 1.52c-1.315 1.19-2.729 2.694-2.92 3.08c-.886 1.348-.793 2.002.195 3.652a41 41 0 0 0 2.033 3.032c.67.76.537.76 1.508 1.473c.868.602 2.667 1.021 6.885.602c3.437-.531 4.26-3.53 4.242-4.964v-3.54c.214-2.942-1.016-3.074-3.249-3.364M10.75 7.974v2.524m0-2.524c.557-.909 2.581-.541 2.976 1.174m.035 1.346v-1q.001-.12-.015-.237m-.02-.109l.02.11m-.02-.11a1 1 0 0 0 .02.11m-.02-.11c-.14-1.196 2.89-.904 3.014 1.2v1.143" color="currentColor"></svg:path>`,
})
export class HugeiconsTap08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
