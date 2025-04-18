import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBloodBagIcon],svg[hugeicons-blood-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 7.372c8-4.13 6.5 2.633 14 0"></svg:path><svg:path d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v2c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 18 14.81 18 12 18s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 15.213 5 13.81 5 11z"></svg:path><svg:path d="m12.014 10l-1.44 1.488a2.127 2.127 0 0 0 .013 2.92a1.97 1.97 0 0 0 2.828-.014a2.114 2.114 0 0 0 0-2.92zM8 22a4 4 0 0 0 4-4"></svg:path></svg:g>`,
})
export class HugeiconsBloodBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
