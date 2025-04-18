import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditorVideoIcon],svg[dashicons-editor-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-3v1H7V2H4v15h3v-1h6v1h3zM6 3v1H5V3zm9 0v1h-1V3zm-2 1v5H7V4zM6 5v1H5V5zm9 0v1h-1V5zM6 7v1H5V7zm9 0v1h-1V7zM6 9v1H5V9zm9 0v1h-1V9zm-2 1v5H7v-5zm-7 1v1H5v-1zm9 0v1h-1v-1zm-9 2v1H5v-1zm9 0v1h-1v-1zm-9 2v1H5v-1zm9 0v1h-1v-1z"></svg:path>`,
})
export class DashiconsEditorVideoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
