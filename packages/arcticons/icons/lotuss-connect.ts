import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLotussConnectIcon],svg[arcticons-lotuss-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.381 35.731H6.755c-.695 0-1.255-.56-1.255-1.254V7.259c0-.695.56-1.255 1.255-1.255h34.49c.695 0 1.255.56 1.255 1.255v27.218c0 .695-.56 1.254-1.255 1.254H18.273c-.886 0-1.058.147-1.596.629l-5.867 5.252c-.651.583-1.408.51-1.324-.275l.52-4.858c.037-.355-.136-.748-.625-.748"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.738 15.095L24 23.86l12.262-8.765"></svg:path>`,
})
export class ArcticonsLotussConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
