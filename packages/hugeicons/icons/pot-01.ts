import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPot01Icon],svg[hugeicons-pot-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9h20M4 9l.504 5.543c.236 2.592.353 3.887 1.213 4.672c.859.785 2.16.785 4.762.785h3.042c2.602 0 3.903 0 4.762-.785c.86-.785.977-2.08 1.213-4.672L20 9M4 6h16M9 6l.623-2.057A1.5 1.5 0 0 1 11.016 3h1.969a1.5 1.5 0 0 1 1.392.943L15 6" color="currentColor"></svg:path>`,
})
export class HugeiconsPot01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
