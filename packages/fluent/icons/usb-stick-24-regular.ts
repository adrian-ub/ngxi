import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentUsbStick24RegularIcon],svg[fluent-usb-stick-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.267 1.997a.75.75 0 0 1 .743.648l.007.102v4.386a2.25 2.25 0 0 1 1.48 1.946l.007.17v10.5a2.25 2.25 0 0 1-2.096 2.246l-.154.005h-6.5a2.25 2.25 0 0 1-2.245-2.096l-.005-.154V9.25a2.25 2.25 0 0 1 1.513-2.127V2.747a.75.75 0 0 1 .648-.743l.101-.007zM15.254 8.5h-6.5a.75.75 0 0 0-.743.648l-.007.102v10.5c0 .38.282.693.648.743l.102.007h6.5a.75.75 0 0 0 .743-.648l.007-.102V9.25a.75.75 0 0 0-.648-.743zm-.737-5.003H9.516v3.502h5.001z"></svg:path>`,
})
export class FluentUsbStick24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
