import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseGalleryIcon],svg[tdesign-browse-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.41 1.586l.692.722A13.96 13.96 0 0 1 24 12c0 3.761-1.485 7.178-3.898 9.692l-.692.722l-1.443-1.385l.692-.721A11.96 11.96 0 0 0 22 12c0-3.225-1.27-6.15-3.34-8.308l-.693-.721zM10 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16M0 12C0 6.477 4.477 2 10 2s10 4.477 10 10s-4.477 10-10 10S0 17.523 0 12m11-5.5v5.086L14.414 15L13 16.414l-4-4V6.5z"></svg:path>`,
})
export class TdesignBrowseGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
