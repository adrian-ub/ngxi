import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCardSdIcon],svg[zmdi-card-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 3q17 0 29.5 12.5T341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V131L128 3zM171 131V45h-43v86zm64 0V45h-43v86zm64 0V45h-43v86z"></svg:path>`,
})
export class ZmdiCardSdIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
