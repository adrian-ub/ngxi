import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundMusicVideoIcon],svg[ic-round-music-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z"></svg:path><svg:path fill="currentColor" d="M10.84 16.98c1.26-.17 2.16-1.33 2.16-2.6V9h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v4.51c-.46-.35-1.02-.54-1.66-.51c-1.11.07-2.09.92-2.3 2.02a2.512 2.512 0 0 0 2.8 2.96"></svg:path>`,
})
export class IcRoundMusicVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
