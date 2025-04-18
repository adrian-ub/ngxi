import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseGalleryFilledIcon],svg[tdesign-browse-gallery-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.102 2.308l-.692-.722l-1.443 1.385l.692.721A11.96 11.96 0 0 1 22 12c0 3.225-1.27 6.15-3.34 8.308l-.693.721l1.443 1.385l.692-.722A13.96 13.96 0 0 0 24 12c0-3.761-1.485-7.178-3.898-9.692"></svg:path><svg:path fill="currentColor" d="M10 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 17.523 0 12S4.477 2 10 2m3 14.414L14.414 15L11 11.586V6.5H9v5.914z"></svg:path>`,
})
export class TdesignBrowseGalleryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
