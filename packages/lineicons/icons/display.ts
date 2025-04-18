import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDisplayIcon],svg[lineicons-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.1 9.4H7.9c-3.4 0-6.1 2.7-6.1 6.1v22.8c0 3.4 2.7 6.1 6.1 6.1h21.9v5.7h-7.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.9v-5.7h21.9c3.4 0 6.1-2.7 6.1-6.1V15.5c-.1-3.4-2.9-6.1-6.3-6.1m1.7 28.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6V15.5c0-.9.7-1.6 1.6-1.6h48.3c.9 0 1.6.7 1.6 1.6z"></svg:path>`,
})
export class LineiconsDisplayIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
