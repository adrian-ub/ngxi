import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsNoteblockTextIcon],svg[majesticons-noteblock-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1h-2V3a1 1 0 1 0-2 0v1H9zm2 1v3a1 1 0 1 0 2 0V4zm4 0h2v3a1 1 0 1 1-2 0zM9 4v3a1 1 0 0 1-2 0V4zm-1 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsNoteblockTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
