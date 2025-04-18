import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeGoogleDriveIcon],svg[icomoon-free-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.844 10L3.96 15h9.072l2.884-5zm8.662-1l-4.619-8H5.112l4.619 8zM4.534 2L0 9.856l2.888 5L7.422 7z"></svg:path>`,
})
export class IcomoonFreeGoogleDriveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
