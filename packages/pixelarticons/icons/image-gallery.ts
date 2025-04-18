import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageGalleryIcon],svg[pixelarticons-image-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v16h-5v2h-2v-2H9v2H7v-2H2zm5 18v2H5v-2zm10 0v2h2v-2zm3-16H4v12h16zm-8 4h2v2h-2zm-2 4v-2h2v2zm0 0v2H8v-2zm6 0h-2v-2h2zm0 0h2v2h-2zM8 6H6v2h2z"></svg:path>`,
})
export class PixelarticonsImageGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
