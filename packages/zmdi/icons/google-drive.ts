import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGoogleDriveIcon],svg[zmdi-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m140 35l73 128L73 408L0 280zm43 245h280l-73 128H110zm268-21H305L158 3h146z"></svg:path>`,
})
export class ZmdiGoogleDriveIcon {
  readonly viewBox = input("0 0 464 408")
  readonly width = input("1.14em")
  readonly height = input("1em")
}
