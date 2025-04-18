import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCylinder02Icon],svg[hugeicons-cylinder-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 4c0 1.105-2.239 2-5 2s-5-.895-5-2s2.239-2 5-2s5 .895 5 2m4 14c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4M3.5 16.5L7 4m13.5 12.5L17 4" color="currentColor"></svg:path>`,
})
export class HugeiconsCylinder02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
