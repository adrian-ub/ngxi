import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaBookOutlineIcon],svg[eva-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M7 5h11v10H7a3 3 0 0 0-1 .18V6a1 1 0 0 1 1-1m0 14a1 1 0 0 1 0-2h11v2Z"></svg:path>`,
})
export class EvaBookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
