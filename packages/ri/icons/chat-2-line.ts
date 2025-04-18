import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChat2LineIcon],svg[ri-chat-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.45 19L12 22.5L9.55 19H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-1.041-2H20V5H4v12h6.591L12 19.012z"></svg:path>`,
})
export class RiChat2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
