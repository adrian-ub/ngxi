import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudUploadIcon],svg[zmdi-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M413 150q42 3 70.5 33.5T512 256q0 44-31.5 75.5T405 363H128q-53 0-90.5-37.5T0 235q0-50 33-86t81-41q20-40 58-63.5T256 21q58 0 102 37t55 92m-114 63h64L256 107L149 213h64v86h86z"></svg:path>`,
})
export class ZmdiCloudUploadIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
