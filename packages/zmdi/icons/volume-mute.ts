import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiVolumeMuteIcon],svg[zmdi-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h85L192 21v342L85 256H0z"></svg:path>`,
})
export class ZmdiVolumeMuteIcon {
  readonly viewBox = input("0 0 192 384")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
