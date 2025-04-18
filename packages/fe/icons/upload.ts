import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feUploadIcon],svg[fe-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 5.828V17h-2V5.828L7.757 9.071L6.343 7.657L12 2l5.657 5.657l-1.414 1.414zM5 19h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2"></svg:path>`,
})
export class FeUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
