import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneTenThirtyIcon],svg[emojione-ten-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#62727a"></svg:circle><svg:g fill="#fff"><svg:path d="M30 26h4v32h-4z"></svg:path><svg:path d="m18.03 20.857l2.828-2.828l17.111 17.112l-2.828 2.828z"></svg:path><svg:circle cx="32" cy="32" r="4"></svg:circle></svg:g><svg:circle cx="32" cy="32" r="3" fill="#62727a"></svg:circle>`,
})
export class EmojioneTenThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
