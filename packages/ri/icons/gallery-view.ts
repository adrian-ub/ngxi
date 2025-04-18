import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGalleryViewIcon],svg[ri-gallery-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm2 2h5v4H6zm5 6H6v4h5zm2-6h5v4h-5zm5 6h-5v4h5z"></svg:path>`,
})
export class RiGalleryViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
