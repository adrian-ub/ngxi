import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsDropboxIcon],svg[fa6-brands-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m264.4 116.3l-132 84.3l132 84.3l-132 84.3L0 284.1l132.3-84.3L0 116.3L132.3 32zM131.6 395.7l132-84.3l132 84.3l-132 84.3zm132.8-111.6l132-84.3l-132-83.6L395.7 32L528 116.3l-132.3 84.3L528 284.8l-132.3 84.3z"></svg:path>`,
})
export class Fa6BrandsDropboxIcon {
  readonly viewBox = input("0 0 528 512")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
