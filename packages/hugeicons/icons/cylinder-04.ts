import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCylinder04Icon],svg[hugeicons-cylinder-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 19l-2.121 2.121m0 0a3 3 0 1 0 4.243-4.242a3 3 0 0 0-4.243 4.242"></svg:path><svg:path d="M10 16h4c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 13.213 21 11.81 21 9s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C18.213 2 16.81 2 14 2h-4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 4.787 3 6.19 3 9s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C5.787 16 7.19 16 10 16"></svg:path></svg:g>`,
})
export class HugeiconsCylinder04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
