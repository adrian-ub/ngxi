import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoDropboxIcon],svg[famicons-logo-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256.32 126.24l-120.16 78.25l120.16 78.24L136.16 361L16 282.08l120.16-78.24L16 126.24L136.16 48Zm-120.8 259.52l120.16-78.25l120.16 78.25L255.68 464Zm120.8-103.68l120.16-78.24l-120.16-77.6L375.84 48L496 126.24l-120.16 78.25L496 282.73L375.84 361Z"></svg:path>`,
})
export class FamiconsLogoDropboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
