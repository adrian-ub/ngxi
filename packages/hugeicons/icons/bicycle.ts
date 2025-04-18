import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBicycleIcon],svg[hugeicons-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 19.998c2.21 0 4-1.787 4-3.992a3.996 3.996 0 0 0-4-3.992c-2.21 0-4 1.787-4 3.992a3.996 3.996 0 0 0 4 3.992m12 0c2.21 0 4-1.787 4-3.992a3.996 3.996 0 0 0-4-3.992c-2.21 0-4 1.787-4 3.992a3.996 3.996 0 0 0 4 3.992"></svg:path><svg:path d="M6 16.006h4.37a1 1 0 0 0 .87-.505l4.26-7.48M12 13.012L7 7.023m0 0H5m2 0h2m9.053 8.947L14.806 4.03c1.45-.07 4.553-.2 5.185 2.18"></svg:path></svg:g>`,
})
export class HugeiconsBicycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
