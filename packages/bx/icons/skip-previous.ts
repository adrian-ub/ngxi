import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSkipPreviousIcon],svg[bx-skip-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 7l-7 5l7 5zm-7 5V7H7v10h2z"></svg:path>`,
})
export class BxSkipPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
