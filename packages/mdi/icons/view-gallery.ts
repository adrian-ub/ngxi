import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewGalleryIcon],svg[mdi-view-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H2v13h19zM2 17h4v4H2zm5 0h4v4H7zm5 0h4v4h-4zm5 0h4v4h-4z"></svg:path>`,
})
export class MdiViewGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
