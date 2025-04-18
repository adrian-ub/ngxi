import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiVolumeOffIcon],svg[oi-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.34 0L4 2H2v4h2l1.34 2H6V0z"></svg:path>`,
})
export class OiVolumeOffIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
