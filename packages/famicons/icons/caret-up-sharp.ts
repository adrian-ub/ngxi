import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsCaretUpSharpIcon],svg[famicons-caret-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 368L256 144L64 368z"></svg:path>`,
})
export class FamiconsCaretUpSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
