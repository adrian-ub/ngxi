import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckmarkIcon],svg[lineicons-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.6 13.4c-.9-.9-2.3-.9-3.2 0l-34 33L6.6 29.9c-.9-.9-2.3-.8-3.2 0c-.9.9-.8 2.3 0 3.2l17.7 17.2c.6.6 1.4.9 2.3.9s1.6-.3 2.3-.9l34.9-33.9c.9-.7.9-2.1 0-3"></svg:path>`,
})
export class LineiconsCheckmarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
