import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxObjectsHorizontalRightIcon],svg[bx-objects-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h2v20h-2zm-2 12a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-2 4H4v-3h12zm-9-7h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1m1-5h8v3H8z"></svg:path>`,
})
export class BxObjectsHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
