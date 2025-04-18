import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDevicePlayFilledIcon],svg[ix-device-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m405.33 42.668l.003 217.75a117.4 117.4 0 0 0-32-4.417c-36.436 0-68.993 16.608-90.514 42.667H64v-256zm64.003 330.667c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96c53.02 0 96-42.981 96-96m-127.778-46.736l85.333 48l-85.333 48z" clip-rule="evenodd"></svg:path>`,
})
export class IxDevicePlayFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
