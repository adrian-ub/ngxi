import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursor01Icon],svg[hugeicons-cursor-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.035 19.691c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873l-4.357-3.347c-.45-.346-.792-.835-.455-1.388c.856-1.402 3.596-2.593 3.768-4.299c.303-3.11-14.254-5.942-16.426-3.77s.66 16.729 3.77 16.426" color="currentColor"></svg:path>`,
})
export class HugeiconsCursor01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
