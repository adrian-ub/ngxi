import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatLetterSpacingIcon],svg[mdi-format-letter-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 10.7h4.1l-2-5.4zM15.6 3h1.7L22 15h-1.9l-1-2.6h-5.4l-1 2.6h-1.9zm-4.4 0h1.9L8.4 15H6.7L2 3h1.9l3.6 9.7M19 22v-2H5v2l-3-3l3-3v2h14v-2l3 3z"></svg:path>`,
})
export class MdiFormatLetterSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
