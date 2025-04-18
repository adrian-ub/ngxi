import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGalleryUploadFillIcon],svg[ri-gallery-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v2h8V1h2v2h3.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1zm4 7l-4 4h3v4h2v-4h3z"></svg:path>`,
})
export class RiGalleryUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
