import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderSharedIcon],svg[tdesign-folder-shared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v16H1zm2 2V19h18V7H10.52l-2-2.5zm9 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2m2.4 2.8a3 3 0 1 0-4.8 0A4 4 0 0 0 8 16.5v1h2v-1a2 2 0 1 1 4 0v1h2v-1c0-1.309-.628-2.47-1.6-3.2"></svg:path>`,
})
export class TdesignFolderSharedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
