import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileDuplicateLineIcon],svg[majesticons-file-duplicate-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8.828a1 1 0 0 0-.293-.707L14.88 4.293A1 1 0 0 0 14.172 4H10zM7 5a3 3 0 0 1 3-3h4.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828V15a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V5z"></svg:path><svg:path d="M3 9a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9zm11-7a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2h-4a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsFileDuplicateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
