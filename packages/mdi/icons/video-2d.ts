import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideo2dIcon],svg[mdi-video-2d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h3c1.66 0 3 1.34 3 3v4c0 1.66-1.34 3-3 3h-3zm3 8c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-1v6zM5 7h4a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H7v2h4v2H5v-4c0-1.1.9-2 2-2h2V9H5z"></svg:path>`,
})
export class MdiVideo2dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
