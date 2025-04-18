import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNginxIcon],svg[simple-icons-nginx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0L1.605 6v12L12 24l10.395-6V6zm6 16.59c0 .705-.646 1.29-1.529 1.29c-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29c.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18z"></svg:path>`,
})
export class SimpleIconsNginxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
