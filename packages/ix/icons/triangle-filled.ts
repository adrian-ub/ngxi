import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTriangleFilledIcon],svg[ix-triangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M278.313 48.296a42.67 42.67 0 0 1 15.876 15.876l182.478 319.336c11.691 20.46 4.583 46.523-15.876 58.214a42.67 42.67 0 0 1-21.169 5.622H74.667C51.103 447.344 32 428.24 32 404.677a42.67 42.67 0 0 1 5.622-21.169L220.099 64.172c11.691-20.459 37.755-27.567 58.214-15.876"></svg:path>`,
})
export class IxTriangleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
