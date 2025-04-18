import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsVideoIcon],svg[gridicons-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.001 4h8v1.997h2V4A2 2 0 0 1 20 6v12a2 2 0 0 1-1.999 2v-2.003h-2V20h-8v-2.003h-2V20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h.001v1.997h2zM10 15l4.5-3L10 9zm8.001.997v-3h-2v3zm0-5v-3h-2v3zm-10 5v-3h-2v3zm0-5v-3h-2v3z"></svg:path>`,
})
export class GridiconsVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
