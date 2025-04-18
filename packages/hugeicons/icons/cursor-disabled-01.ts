import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorDisabled01Icon],svg[hugeicons-cursor-disabled-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L17.5 14.468"></svg:path><svg:path d="M14.318 9.682a4.5 4.5 0 0 0 6.364-6.364m-6.364 6.364a4.5 4.5 0 0 1 6.364-6.364m-6.364 6.364l6.364-6.364"></svg:path></svg:g>`,
})
export class HugeiconsCursorDisabled01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
