import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowUpRightAndArrowDownLeftFromCenterIcon],svg[prime-arrow-up-right-and-arrow-down-left-from-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3.75a.75.75 0 0 0 0 1.5h3.69l-4.72 4.72a.75.75 0 1 0 1.06 1.06l4.72-4.72V10a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75zm-4 16.5a.75.75 0 0 0 0-1.5H6.31l4.72-4.72a.75.75 0 1 0-1.06-1.06l-4.72 4.72V14a.75.75 0 0 0-1.5 0v5.5c0 .414.336.75.75.75z" clip-rule="evenodd"></svg:path>`,
})
export class PrimeArrowUpRightAndArrowDownLeftFromCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
