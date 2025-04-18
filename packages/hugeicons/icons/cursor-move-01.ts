import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMove01Icon],svg[hugeicons-cursor-move-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852M17 2v3m0-3c-.2 0-1.262.985-1.7 1.392M17 2c.2 0 1.28 1 1.7 1.392"></svg:path><svg:path d="M17 12V9m0 3c.2 0 1.262-.985 1.7-1.392M17 12c-.2 0-1.28-1-1.7-1.392M12 7h3m-3 0c0 .2.985 1.262 1.392 1.7M12 7c0-.2 1-1.28 1.392-1.7M22 7h-3m3 0c0-.2-.985-1.262-1.392-1.7M22 7c0 .2-1 1.28-1.392 1.7"></svg:path></svg:g>`,
})
export class HugeiconsCursorMove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
