import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsAttachmentIcon],svg[gridicons-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1a5 5 0 0 0-5 5v10a3 3 0 0 0 3 3a2.99 2.99 0 0 0 2.99-3V6H13v10a1 1 0 1 1-2 0V6a3 3 0 1 1 6 0v10.125C17 18.887 14.762 21 12 21a5 5 0 0 1-5-5v-5H5v5a7 7 0 0 0 7 7a6.99 6.99 0 0 0 6.99-7V6c0-2.762-2.228-5-4.99-5"></svg:path>`,
})
export class GridiconsAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
