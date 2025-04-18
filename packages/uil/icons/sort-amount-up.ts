import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSortAmountUpIcon],svg[uil-sort-amount-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.71 6.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-2 2a1 1 0 0 0 1.42 1.42l.29-.3V17a1 1 0 0 0 2 0V9.41l.29.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM11 8h10a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2m10 8H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0-5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSortAmountUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
