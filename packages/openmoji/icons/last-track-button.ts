import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLastTrackButtonIcon],svg[openmoji-last-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M42.516 55L25.54 45.889l-14.286-7.668c-1.672-.897-1.672-3.545 0-4.442L25.54 26.11L42.516 17"></svg:path><svg:path d="m66 55l-17.055-9.111l-14.353-7.668c-1.68-.897-1.68-3.545 0-4.442l14.353-7.668L66 17M6 55V17"></svg:path></svg:g>`,
})
export class OpenmojiLastTrackButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
