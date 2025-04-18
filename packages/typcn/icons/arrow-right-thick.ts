import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnArrowRightThickIcon],svg[typcn-arrow-right-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.586 6.586a2 2 0 0 0 0 2.828L12.172 11H4.928a2 2 0 0 0 0 4h7.244l-1.586 1.586a2 2 0 1 0 2.828 2.828L19.828 13l-6.414-6.414a2 2 0 0 0-2.828 0"></svg:path>`,
})
export class TypcnArrowRightThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
