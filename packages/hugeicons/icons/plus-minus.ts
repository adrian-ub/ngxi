import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlusMinusIcon],svg[hugeicons-plus-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16c0 1.87 0 2.804.402 3.5a3 3 0 0 0 1.098 1.098C13.196 21 14.13 21 16 21s2.804 0 3.5-.402a3 3 0 0 0 1.098-1.098C21 18.804 21 17.87 21 16s0-2.804-.402-3.5a3 3 0 0 0-1.098-1.098C18.804 11 17.87 11 16 11M8 3c1.87 0 2.804 0 3.5.402A3 3 0 0 1 12.598 4.5C13 5.196 13 6.13 13 8s0 2.804-.402 3.5a3 3 0 0 1-1.098 1.098C10.804 13 9.87 13 8 13s-2.804 0-3.5-.402A3 3 0 0 1 3.402 11.5C3 10.804 3 9.87 3 8s0-2.804.402-3.5A3 3 0 0 1 4.5 3.402C5.196 3 6.13 3 8 3m0 3v4m2-2H6m12 8h-4" color="currentColor"></svg:path>`,
})
export class HugeiconsPlusMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
