import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatParagraphSpacingIcon],svg[mdi-format-paragraph-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h18v2H3zM3 2h18v2H3zm0 18h18v2H3zM13 8h2l-3-3l-3 3h2v5H9l3 3l3-3h-2z"></svg:path>`,
})
export class MdiFormatParagraphSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
