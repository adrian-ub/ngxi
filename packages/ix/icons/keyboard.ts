import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixKeyboardIcon],svg[ix-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 128v234.667H42.667V128zm-42.666 42.667H85.333V320h341.334zM149.333 256v42.667h-42.666V256zm192 0v42.667H170.667V256zm64 0v42.667h-42.666V256zm-256-64v42.667h-42.666V192zm64 0v42.667h-42.666V192zm64 0v42.667h-42.666V192zm64 0v42.667h-42.666V192zm64 0v42.667h-42.666V192z"></svg:path>`,
})
export class IxKeyboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
