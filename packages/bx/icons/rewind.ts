import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxRewindIcon],svg[bx-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12V7l-7 5l7 5zm7-5l-7 5l7 5z"></svg:path>`,
})
export class BxRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
