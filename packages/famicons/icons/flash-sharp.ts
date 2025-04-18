import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFlashSharpIcon],svg[famicons-flash-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 208H288l32-192L80 304h144l-32 192Z"></svg:path>`,
})
export class FamiconsFlashSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
