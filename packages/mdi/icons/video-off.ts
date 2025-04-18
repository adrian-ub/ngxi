import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideoOffIcon],svg[mdi-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.27 2L2 3.27L4.73 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12c.2 0 .39-.08.54-.18L19.73 21L21 19.73M21 6.5l-4 4V7a1 1 0 0 0-1-1H9.82L21 17.18z"></svg:path>`,
})
export class MdiVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
