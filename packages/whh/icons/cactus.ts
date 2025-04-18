import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCactusIcon],svg[whh-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640H512v352q0 13-9.5 22.5T480 1024H352q-13 0-22.5-9.5T320 992V768H192q-79 0-135.5-56T0 576V416q0-40 28-68t68-28t68 28t28 68v160h128V100q0-42 28-71t68-29t68 29t28 71v348h128V224q0-40 28-68t68-28t68 28t28 68v224q0 79-56 135.5T640 640"></svg:path>`,
})
export class WhhCactusIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
