import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewGalleryOutlineIcon],svg[mdi-view-gallery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v18h22V3zm20 2v9H3V5zM11 16v3H8v-3zm-8 0h3v3H3zm10 3v-3h3v3zm5 0v-3h3v3z"></svg:path>`,
})
export class MdiViewGalleryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
