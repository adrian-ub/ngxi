import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBabyBottleIcon],svg[hugeicons-baby-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 10.5s1 2.5 1 5.75c0 1.171-.13 2.245-.296 3.14c-.209 1.124-.313 1.686-.869 2.148S15.617 22 14.292 22H9.708c-1.325 0-1.987 0-2.543-.462s-.66-1.024-.869-2.149A17.3 17.3 0 0 1 6 16.25C6 13 7 10.5 7 10.5"></svg:path><svg:path d="M7 10.511h10c.148-.816-.079-2.389-2.04-3.01c-.465-.149-1.01-.425-1.256-.89a1.64 1.64 0 0 1 .007-1.585a2.067 2.067 0 0 0-1.229-2.939A1.7 1.7 0 0 0 12 2a1.7 1.7 0 0 0-.515.087a2.067 2.067 0 0 0-1.23 2.939c.327.618.225 1.175.008 1.586c-.238.45-.756.85-1.24 1.003C7.672 8.045 6.74 9.068 7 10.511M15 14h2.5M15 18h2.5"></svg:path></svg:g>`,
})
export class HugeiconsBabyBottleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
