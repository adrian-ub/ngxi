import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNextTrackButtonIcon],svg[openmoji-next-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m29.484 17l16.976 9.111l14.286 7.668c1.672.897 1.672 3.545 0 4.442L46.46 45.89L29.484 55"></svg:path><svg:path d="m6 17l17.055 9.111l14.353 7.668c1.68.897 1.68 3.545 0 4.442L23.055 45.89L6 55m60-38v38"></svg:path></svg:g>`,
})
export class OpenmojiNextTrackButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
