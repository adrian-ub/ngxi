import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorProgress02Icon],svg[hugeicons-cursor-progress-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path><svg:path d="M17 7a5 5 0 0 0-3.535-3.536M17 7a5 5 0 0 0 1.295-4.83M17 7a5 5 0 0 0 4.83-1.294M17 7a5 5 0 0 0 3.535 3.536M17 7a5 5 0 0 0-1.295 4.83M17 7a5 5 0 0 0-4.83 1.295m1.295-4.831a5 5 0 0 0-1.296 4.83m1.296-4.83a5.01 5.01 0 0 1 4.83-1.295m0 0a5.01 5.01 0 0 1 3.536 3.537m0 0a5.01 5.01 0 0 1-1.296 4.83m0 0a5.01 5.01 0 0 1-4.83 1.295m0 0a5.01 5.01 0 0 1-3.536-3.536"></svg:path></svg:g>`,
})
export class HugeiconsCursorProgress02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
