import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMathFormula16FilledIcon],svg[fluent-math-formula-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.753 1.502C7.07.24 4.659 1.347 4.519 3.445L4.449 4.5H3.75a.75.75 0 0 0 0 1.5h.598l-.42 6.293a1.25 1.25 0 0 1-1.674 1.092l-.247-.09a.75.75 0 0 0-.513 1.41l.248.09a2.75 2.75 0 0 0 3.683-2.402L5.852 6H7.25a.75.75 0 1 0 0-1.5H5.952l.063-.955a1.15 1.15 0 0 1 1.838-.843l.197.148a.75.75 0 1 0 .9-1.2z"></svg:path><svg:path d="M9.636 7.665a1.5 1.5 0 0 0-2.338-.274l-.328.328a.75.75 0 0 0 1.06 1.06l.329-.328l1.192 1.937L7.22 12.72a.75.75 0 0 0 1.06 1.06l2.079-2.078l1.005 1.633a1.5 1.5 0 0 0 2.338.274l.328-.328a.75.75 0 0 0-1.06-1.06l-.329.328l-1.192-1.937L13.78 8.28a.75.75 0 0 0-1.06-1.06l-2.08 2.077z"></svg:path></svg:g>`,
})
export class FluentMathFormula16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
