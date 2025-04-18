import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFileTraySharpIcon],svg[famicons-file-tray-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64H64L32 256v192h448V256Zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316Z"></svg:path>`,
})
export class FamiconsFileTraySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
