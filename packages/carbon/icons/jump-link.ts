import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonJumpLinkIcon],svg[carbon-jump-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.414 17.586L18 22.172V8H8V6h10a2 2 0 0 1 2 2v14.172l4.586-4.586L26 19l-7 7l-7-7Z"></svg:path>`,
})
export class CarbonJumpLinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
