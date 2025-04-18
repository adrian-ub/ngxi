import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUrlCheckerIcon],svg[arcticons-url-checker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.852 32.708a8.3 8.3 0 0 1-7.236-4.355a9.01 9.01 0 0 1 .009-8.704a8.3 8.3 0 0 1 7.245-4.338m0-.001l9.001-.035m-9.457 17.46l8.639.09m14.095-17.651a8.3 8.3 0 0 1 7.236 4.355a9.01 9.01 0 0 1-.009 8.704a8.3 8.3 0 0 1-7.245 4.338m.09-17.369l-9 .036m8.91 17.333l-8.64-.09m-10.984-8.749h16.733v.182H15.506z"></svg:path>`,
})
export class ArcticonsUrlCheckerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
