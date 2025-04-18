import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCaretVerticalOutlineIcon],svg[teenyicons-caret-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 13l-.332.374l.332.295l.332-.295zm0-11l.34-.367l-.333-.308l-.34.301zm.332 11.374l4.5-4l-.664-.748l-4.5 4zm0-.748l-4.5-4l-.664.748l4.5 4zm-.664-11l-4.5 4l.664.748l4.5-4zm-.008.74l4.313 4l.68-.733l-4.313-4z"></svg:path>`,
})
export class TeenyiconsCaretVerticalOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
