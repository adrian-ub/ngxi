import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBasketFillIcon],svg[ph-basket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 82.73a8 8 0 0 0-6-2.73h-44.37L134 18.73a8 8 0 0 0-12 0L68.37 80H24a8 8 0 0 0-7.93 9.06l15.07 113.06A16.06 16.06 0 0 0 47 216h162a16.06 16.06 0 0 0 15.86-13.88l15.07-113.06a8 8 0 0 0-1.93-6.33M81.6 184a7 7 0 0 1-.81 0a8 8 0 0 1-8-7.2l-5.6-56a8 8 0 0 1 15.92-1.6l5.6 56a8 8 0 0 1-7.11 8.8m54.4-8a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0ZM89.63 80L128 36.15L166.37 80Zm99.13 40.8l-5.6 56a8 8 0 0 1-7.95 7.2a7 7 0 0 1-.81 0a8 8 0 0 1-7.16-8.76l5.6-56a8 8 0 0 1 15.92 1.6Z"></svg:path>`,
})
export class PhBasketFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
