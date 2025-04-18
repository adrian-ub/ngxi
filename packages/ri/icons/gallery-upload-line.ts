import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGalleryUploadLineIcon],svg[ri-gallery-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v4H4v14h16V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1zm4 7l4 4h-3v4h-2v-4H8zm6-7v4h-8V3h6V1z"></svg:path>`,
})
export class RiGalleryUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
