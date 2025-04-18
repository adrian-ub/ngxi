import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsHandRightIcon],svg[bxs-hand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8H8l1.212-3.03a2 2 0 0 0-1.225-2.641l-.34-.113a1 1 0 0 0-1.084.309L2.231 7.722a1 1 0 0 0-.231.64V19a2 2 0 0 0 2 2h7.21a2 2 0 0 0 1.987-1.779L14 12h6a2 2 0 0 0 0-4"></svg:path>`,
})
export class BxsHandRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
