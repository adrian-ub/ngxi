import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiYoutubeMusicIcon],svg[cbi-youtube-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 5.727a6.274 6.274 0 0 1 0 12.546a6.274 6.274 0 0 1 0-12.546m0 .546A5.735 5.735 0 0 0 6.273 12A5.727 5.727 0 0 0 12 17.727A5.727 5.727 0 0 0 17.727 12A5.735 5.735 0 0 0 12 6.273m-2.182 2.59l5.318 3l-5.318 3.273Z"></svg:path>`,
})
export class CbiYoutubeMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
