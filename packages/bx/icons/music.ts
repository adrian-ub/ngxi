import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMusicIcon],svg[bx-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.684 5.821l-9-3.272A1.998 1.998 0 0 0 8 4.428v6.129A3.95 3.95 0 0 0 6 10c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4V4.428L19 7.7v6.856A3.96 3.96 0 0 0 17 14c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4V7.7c0-.838-.529-1.594-1.316-1.879M6 16c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2m11 4c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2"></svg:path>`,
})
export class BxMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
