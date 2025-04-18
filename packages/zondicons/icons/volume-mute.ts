import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsVolumeMuteIcon],svg[zondicons-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H5v6h4l5 5V2z"></svg:path>`,
})
export class ZondiconsVolumeMuteIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
