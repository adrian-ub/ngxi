import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneTwoOclockIcon],svg[emojione-two-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#62727a"></svg:circle><svg:g fill="#fff"><svg:path d="M30 6h4v32h-4z"></svg:path><svg:path d="M27.9 37L26 33.4L46.1 21l1.9 3.6z"></svg:path><svg:circle cx="32" cy="32" r="4"></svg:circle></svg:g><svg:circle cx="32" cy="32" r="3" fill="#62727a"></svg:circle>`,
})
export class EmojioneTwoOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
