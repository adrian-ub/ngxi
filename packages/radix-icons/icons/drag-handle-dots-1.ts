import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsDragHandleDots1Icon],svg[radix-icons-drag-handle-dots-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="4.5" cy="2.5" r=".6"></svg:circle><svg:circle cx="4.5" cy="4.5" r=".6"></svg:circle><svg:circle cx="4.5" cy="6.499" r=".6"></svg:circle><svg:circle cx="4.5" cy="8.499" r=".6"></svg:circle><svg:circle cx="4.5" cy="10.498" r=".6"></svg:circle><svg:circle cx="4.5" cy="12.498" r=".6"></svg:circle><svg:circle cx="6.5" cy="2.5" r=".6"></svg:circle><svg:circle cx="6.5" cy="4.5" r=".6"></svg:circle><svg:circle cx="6.5" cy="6.499" r=".6"></svg:circle><svg:circle cx="6.5" cy="8.499" r=".6"></svg:circle><svg:circle cx="6.5" cy="10.498" r=".6"></svg:circle><svg:circle cx="6.5" cy="12.498" r=".6"></svg:circle><svg:circle cx="8.499" cy="2.5" r=".6"></svg:circle><svg:circle cx="8.499" cy="4.5" r=".6"></svg:circle><svg:circle cx="8.499" cy="6.499" r=".6"></svg:circle><svg:circle cx="8.499" cy="8.499" r=".6"></svg:circle><svg:circle cx="8.499" cy="10.498" r=".6"></svg:circle><svg:circle cx="8.499" cy="12.498" r=".6"></svg:circle><svg:circle cx="10.499" cy="2.5" r=".6"></svg:circle><svg:circle cx="10.499" cy="4.5" r=".6"></svg:circle><svg:circle cx="10.499" cy="6.499" r=".6"></svg:circle><svg:circle cx="10.499" cy="8.499" r=".6"></svg:circle><svg:circle cx="10.499" cy="10.498" r=".6"></svg:circle><svg:circle cx="10.499" cy="12.498" r=".6"></svg:circle></svg:g>`,
})
export class RadixIconsDragHandleDots1Icon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
