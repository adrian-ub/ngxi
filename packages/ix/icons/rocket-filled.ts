import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRocketFilledIcon],svg[ix-rocket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64q-13.525 184.193-96 266.667q-14.626 14.626-32.03 26.742v47.826l-64 64l-39.055-68.344l-105.723-105.734L42.667 256l64-64h48.08q12.006-17.42 26.587-32Q263.809 77.526 448 64M178.997 393.708l30.17 30.17l-45.255 45.255l-30.17-30.17zm-45.255-45.255l30.17 30.17l-75.425 75.425l-30.17-30.17zm-45.255-45.255l30.17 30.17l-45.255 45.255l-30.17-30.17zM288 192c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxRocketFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
