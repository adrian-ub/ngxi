import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastRedTriangleIcon],svg[fluent-emoji-high-contrast-red-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.268 9c.77-1.333 2.694-1.333 3.464 0l6.062 10.5c.77 1.333-.192 3-1.732 3H9.938c-1.54 0-2.502-1.667-1.732-3zM16 10L9.938 20.5h12.124z"></svg:path>`,
})
export class FluentEmojiHighContrastRedTriangleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
