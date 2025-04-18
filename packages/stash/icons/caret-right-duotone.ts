import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCaretRightDuotoneIcon],svg[stash-caret-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.227 12.64l-3.636 3.199c-.45.395-1.091.019-1.091-.64V8.8c0-.659.641-1.035 1.09-.64l3.637 3.2c.364.32.364.959 0 1.279"></svg:path>`,
})
export class StashCaretRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
