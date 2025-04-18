import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorProgress01Icon],svg[hugeicons-cursor-progress-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.964 2.047a5.4 5.4 0 0 1 1.42 0M19.9 3.088c.375.286.724.636 1.01 1.011m1.042 2.519c.063.47.063.947 0 1.417m-8.357-4.717c-2.151 2.038-2.07 5.22-.103 7.187c1.99 1.99 5.226 2.054 7.257-.172"></svg:path><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path></svg:g>`,
})
export class HugeiconsCursorProgress01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
