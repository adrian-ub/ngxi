import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeHashtagIcon],svg[prime-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7.25h-3l.77-3.07a.75.75 0 0 0-1.46-.36l-.86 3.43H10l.77-3.07a.75.75 0 0 0-1.46-.36l-.9 3.43H5a.75.75 0 0 0 0 1.5h3l-1.63 6.5H3a.75.75 0 0 0 0 1.5h3l-.77 3.07a.75.75 0 0 0 1.46.36l.86-3.43H14l-.77 3.07a.75.75 0 0 0 1.46.36l.86-3.43H19a.75.75 0 0 0 0-1.5h-3l1.63-6.5H21a.75.75 0 0 0 0-1.5m-5 1.5l-1.63 6.5H8l1.63-6.5Z"></svg:path>`,
})
export class PrimeHashtagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
