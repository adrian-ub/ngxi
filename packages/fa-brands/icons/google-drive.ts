import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsGoogleDriveIcon],svg[fa-brands-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M339 314.9L175.4 32h161.2l163.6 282.9zm-137.5 23.6L120.9 480h310.5L512 338.5zM154.1 67.4L0 338.5L80.6 480L237 208.8z"></svg:path>`,
})
export class FaBrandsGoogleDriveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
