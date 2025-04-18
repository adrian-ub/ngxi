import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTapeDriveIcon],svg[mdi-tape-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4M5 3h14a2 2 0 0 1 2 2v12h-4.1a6.96 6.96 0 0 0 2.1-5c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7h9c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2"></svg:path>`,
})
export class MdiTapeDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
