import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFileFolderIcon],svg[arcticons-emoji-file-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.162 14.996V9.328l-21.035-.002a.28.28 0 0 1-.276-.284l-.053-1.167c-.089-1.376-1.03-2.31-2.305-2.31H7.808A2.31 2.31 0 0 0 5.5 7.871v34.564"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.349 38.89c-.113 2.015-2.377 3.322-3.849 3.546l34.692-.003a2.31 2.31 0 0 0 2.308-2.309V15.766a.77.77 0 0 0-.77-.77H10.122a.77.77 0 0 0-.77.77z"></svg:path>`,
})
export class ArcticonsEmojiFileFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
