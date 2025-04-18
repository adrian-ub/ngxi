import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttachmentFillIcon],svg[iconamoon-attachment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4a5 5 0 0 0-5 5v6a1 1 0 1 1-2 0V9a7 7 0 1 1 14 0v8a5 5 0 0 1-10 0V9a3 3 0 0 1 6 0v8a1 1 0 1 1-2 0V9a1 1 0 1 0-2 0v8a3 3 0 0 0 6 0V9a5 5 0 0 0-5-5" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonAttachmentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
