import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFastForwardIcon],svg[bx-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 12l-7-5v10zM5 7v10l7-5z"></svg:path>`,
})
export class BxFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
