import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSorting05Icon],svg[hugeicons-sorting-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 10h7m-7 4h5m-5 4h3M11 6h10M7 18.813C6.607 19.255 5.56 21 5 21m-2-2.187C3.393 19.255 4.44 21 5 21m0 0v-6M3 5.188C3.393 4.745 4.44 3 5 3m2 2.188C6.607 4.745 5.56 3 5 3m0 0v6" color="currentColor"></svg:path>`,
})
export class HugeiconsSorting05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
