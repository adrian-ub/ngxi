import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFileSymlinkDirectoryIcon],svg[octicon-file-symlink-directory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM1 3h5v1H1V3zm6 9v-2c-.98-.02-1.84.22-2.55.7c-.71.48-1.19 1.25-1.45 2.3c.02-1.64.39-2.88 1.13-3.73C4.86 8.43 5.82 8 7.01 8V6l4 3l-4 3H7z" fill="currentColor"></svg:path>`,
})
export class OcticonFileSymlinkDirectoryIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
