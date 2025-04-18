import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitTelephoneIcon],svg[formkit-telephone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.38 1.52c-.44.05-.79.41-.85.85l-.77 3.27c-.11.46.12.94.55 1.14l.59.27C9.46 8.2 8.49 8.99 8.49 8.99s-.8.97-1.94 1.41l-.27-.59a1 1 0 0 0-1.14-.55l-3.27.77c-.44.06-.8.41-.85.85c-.1.82-.07 2.1.85 2.78c0 0 4.15 2.92 9.19-2.12s2.12-9.19 2.12-9.19c-.69-.92-1.97-.94-2.78-.85Z"></svg:path>`,
})
export class FormkitTelephoneIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
