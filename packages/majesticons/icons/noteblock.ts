import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsNoteblockIcon],svg[majesticons-noteblock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a1 1 0 0 1 1 1v1H7V3a1 1 0 0 1 1-1m9 2h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1v3a1 1 0 0 0 2 0V4h2v3a1 1 0 1 0 2 0V4h2v3a1 1 0 1 0 2 0zm0 0h-2V3a1 1 0 1 1 2 0zm-4 0V3a1 1 0 1 0-2 0v1z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsNoteblockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
