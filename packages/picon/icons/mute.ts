import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMuteIcon],svg[picon-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V3h2l2-2v6L2 5m3-3h1l2 3H7m0-3h1L6 5H5"></svg:path>`,
})
export class PiconMuteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
