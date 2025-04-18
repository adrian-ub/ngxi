import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMailIcon],svg[ix-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333v341.333h426.667V85.333zM391.894 128L256 248.746L120.107 128zM85.334 384V154.24L256 305.92l170.667-151.68V384z"></svg:path>`,
})
export class IxMailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
