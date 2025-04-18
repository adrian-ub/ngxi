import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnArrowDownThickIcon],svg[typcn-arrow-down-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.414 10.656a2 2 0 0 0-2.828 0L14 12.242V5a2 2 0 0 0-4 0v7.242l-1.586-1.586a2 2 0 1 0-2.828 2.828L12 19.898l6.414-6.414a2 2 0 0 0 0-2.828"></svg:path>`,
})
export class TypcnArrowDownThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
