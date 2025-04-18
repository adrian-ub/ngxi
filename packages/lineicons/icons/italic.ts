import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsItalicIcon],svg[lineicons-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.2 1.8H22.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.5l-9.2 51.5H12.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h30.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H29.7l9.2-51.5h12.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsItalicIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
