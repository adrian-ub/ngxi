import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsGalleryIcon],svg[grommet-icons-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 1h18v18H1zm4 18v4h18V5.97h-4M6 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM2 18l5-6l3 3l4-5l5 6"></svg:path>`,
})
export class GrommetIconsGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
