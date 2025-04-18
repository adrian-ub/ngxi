import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentArrowRightOutlineIcon],svg[mdi-file-document-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 19l-3-3v2h-4v2h4v2zm-9.2 3H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v5.1c-.3-.1-.7-.1-1-.1s-.7 0-1 .1V9h-5V4H6v16h7.1c.1.7.4 1.4.7 2M8 12h8v1.8c-.1.1-.2.1-.3.2H8zm0 4h5v2H8z"></svg:path>`,
})
export class MdiFileDocumentArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
