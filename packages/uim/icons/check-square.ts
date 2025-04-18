import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCheckSquareIcon],svg[uim-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.2 16.4a1 1 0 0 1-.707-.293l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493l6.093-6.093a1 1 0 0 1 1.414 1.414l-6.8 6.8a1 1 0 0 1-.707.293"></svg:path><svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-3.293 7.307l-6.8 6.8a1 1 0 0 1-1.414 0l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493l6.093-6.093a1 1 0 0 1 1.414 1.414" opacity=".5"></svg:path>`,
})
export class UimCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
