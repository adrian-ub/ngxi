import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIdentityVideoIcon],svg[arcticons-identity-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.372 42.276L42.5 9.086l-3.587-3.362L11.372 35.09V20.736H5.5v21.54zM5.5 12.299h5.872v4.632H5.5z"></svg:path>`,
})
export class ArcticonsIdentityVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
