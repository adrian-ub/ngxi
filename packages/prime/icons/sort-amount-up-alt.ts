import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeSortAmountUpAltIcon],svg[prime-sort-amount-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.25c-.19 0-.38-.07-.53-.22L6.5 6.06L4.53 8.03c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l2.5-2.5c.29-.29.77-.29 1.06 0l2.5 2.5c.29.29.29.77 0 1.06c-.15.15-.34.22-.53.22"></svg:path><svg:path fill="currentColor" d="M6.5 19.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.34.75-.75.75m13.5-2.5h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75m-4-6h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m-2-3h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m4 6h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"></svg:path>`,
})
export class PrimeSortAmountUpAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
