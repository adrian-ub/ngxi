import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastRedTrianglePointedDownIcon],svg[fluent-emoji-high-contrast-red-triangle-pointed-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.268 23c.77 1.333 2.694 1.333 3.464 0l6.062-10.5c.77-1.333-.192-3-1.732-3H9.938c-1.54 0-2.502 1.667-1.732 3zM16 22L9.938 11.5h12.124z"></svg:path>`,
})
export class FluentEmojiHighContrastRedTrianglePointedDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
