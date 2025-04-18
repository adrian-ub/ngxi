import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRootCheckerBasicIcon],svg[arcticons-root-checker-basic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 27.94l11.88 11.88L43.5 12.7M16.326 6.851v30.244M31.674 6.852v15.102m0 5.243v13.95m-20.986-9.473h11.305m5.041 0h14.114M6.852 16.326h30.415"></svg:path>`,
})
export class ArcticonsRootCheckerBasicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
