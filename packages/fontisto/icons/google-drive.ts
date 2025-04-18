import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoGoogleDriveIcon],svg[fontisto-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.375 0h8.678l8.735 15.165H18.16zm1.446 16.393h16.607L23.089 24H6.482zM8.25 1.874l4.446 7.607L4.339 24L0 16.392z"></svg:path>`,
})
export class FontistoGoogleDriveIcon {
  readonly viewBox = input("0 0 27 24")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
