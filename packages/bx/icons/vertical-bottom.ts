import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxVerticalBottomIcon],svg[bx-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h3v2h-3zm-5 0h3v2h-3zm-5 0h3v2H8zm-5 0h3v2H3zM13 5h-2v8H8l4 4l4-4h-3z"></svg:path>`,
})
export class BxVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
