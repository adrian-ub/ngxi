import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideo3dIcon],svg[mdi-video-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5v-2h4v-2H6v-2h3V9H5zm8 0h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3zm3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6z"></svg:path>`,
})
export class MdiVideo3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
