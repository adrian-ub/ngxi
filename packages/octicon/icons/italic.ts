import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconItalicIcon],svg[octicon-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3c.56 0 1.13.38 1.13 1.03c0 .75-.59 1.3-1.33 1.3c-.58 0-1.13-.38-1.13-1.03z" fill="currentColor"></svg:path>`,
})
export class OcticonItalicIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}
