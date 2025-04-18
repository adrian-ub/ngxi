import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowDownLeftAndArrowUpRightToCenterIcon],svg[prime-arrow-down-left-and-arrow-up-right-to-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 11.25a.75.75 0 0 0 0-1.5h-3.69l4.72-4.72a.75.75 0 0 0-1.06-1.06l-4.72 4.72V5a.75.75 0 0 0-1.5 0v5.5c0 .414.336.75.75.75zm-14 1.5a.75.75 0 0 0 0 1.5h3.69l-4.72 4.72a.75.75 0 1 0 1.06 1.06l4.72-4.72V19a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class PrimeArrowDownLeftAndArrowUpRightToCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
