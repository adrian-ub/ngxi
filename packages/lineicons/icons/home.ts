import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsHomeIcon],svg[lineicons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.4 62.3H43.3c-3.2 0-5.9-2.6-5.9-5.9V45.8c0-.8-.6-1.4-1.4-1.4h-8c-.8 0-1.4.6-1.4 1.4v10.6c0 3.3-2.6 5.9-5.9 5.9H7.6c-3.2 0-5.9-2.6-5.9-5.9V22.7c0-1.7.8-3.2 2.2-4.1L29.4 2.5c1.6-1 3.6-1 5.1 0L60 18.7c1.4.9 2.2 2.4 2.2 4.1v33.6c.1 3.2-2.6 5.9-5.8 5.9M28 39.9h8c3.3 0 5.9 2.6 5.9 5.9v10.6c0 .8.6 1.4 1.4 1.4h13.1c.8 0 1.4-.6 1.4-1.4V22.7c0-.1-.1-.2-.1-.3L32.1 6.3q-.15-.15-.3 0L6.4 22.4c-.1.1-.2.2-.2.3v33.7c0 .8.6 1.4 1.4 1.4h13.1c.8 0 1.4-.6 1.4-1.4V45.8c0-3.2 2.6-5.9 5.9-5.9"></svg:path>`,
})
export class LineiconsHomeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
