import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCrossMarkIcon],svg[twemoji-cross-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.5 2.5 0 0 0-3.535 0a2.5 2.5 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.5 2.5 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267z"></svg:path>`,
})
export class TwemojiCrossMarkIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
