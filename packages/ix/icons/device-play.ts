import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDevicePlayIcon],svg[ix-device-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m405.333 260.418l-.003-217.75H64v256h218.819c21.521-26.059 54.078-42.667 90.514-42.667a117.4 117.4 0 0 1 32 4.417M106.667 85.335h256V256h-256zm362.666 288c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96c53.02 0 96-42.981 96-96m-127.778-46.736l85.333 48l-85.333 48z" clip-rule="evenodd"></svg:path>`,
})
export class IxDevicePlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
