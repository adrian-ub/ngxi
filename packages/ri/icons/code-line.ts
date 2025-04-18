import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCodeLineIcon],svg[ri-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414z"></svg:path>`,
})
export class RiCodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
