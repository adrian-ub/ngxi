import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFramerIcon],svg[lineicons-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.666 2v6.667H12L5.333 2zM5.333 8.667H12l6.666 6.666H12V22l-6.667-6.667z"></svg:path>`,
})
export class LineiconsFramerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
