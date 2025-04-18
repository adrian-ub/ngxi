import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorHold01Icon],svg[hugeicons-cursor-hold-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path><svg:path d="M17 5v2l1.5 1M22 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class HugeiconsCursorHold01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
