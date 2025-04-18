import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCameraDocumentIcon],svg[mdi-camera-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v15H3v-2h16V7h-4.28c-.34.6-.98 1-1.72 1a2 2 0 0 1-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2c.74 0 1.38.41 1.72 1H19c1.11 0 2 .89 2 2M6 15h7l-2-4H8z"></svg:path>`,
})
export class MdiCameraDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
