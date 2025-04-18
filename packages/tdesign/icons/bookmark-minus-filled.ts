import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkMinusFilledIcon],svg[tdesign-bookmark-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 4q0-.513.09-1H4v19.943l8-5.714l8 5.714V9.41q-.487.09-1 .091A5.5 5.5 0 0 1 13.5 4"></svg:path><svg:path fill="currentColor" d="M23 3h-8v2h8z"></svg:path>`,
})
export class TdesignBookmarkMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
