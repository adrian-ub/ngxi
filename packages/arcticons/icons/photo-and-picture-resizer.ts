import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhotoAndPictureResizerIcon],svg[arcticons-photo-and-picture-resizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.741 25.369V42.5H5.5l.049-34.262h14.393"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.847 20.465v10.749l10.708-10.749M15.847 31.214h10.368M32.683 5.5H42.5L31.387 15.633m11.113-.122V5.5"></svg:path>`,
})
export class ArcticonsPhotoAndPictureResizerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
