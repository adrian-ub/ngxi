import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentUsbPlug24FilledIcon],svg[fluent-usb-plug-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.248a.75.75 0 0 1-1.493.102l-.007-.102V17h-.746a2.25 2.25 0 0 1-2.245-2.095l-.005-.154v-5.5a2.25 2.25 0 0 1 1.513-2.127V2.747a.75.75 0 0 1 .648-.743l.101-.007h6.501a.75.75 0 0 1 .743.648l.007.102v4.386a2.25 2.25 0 0 1 1.48 1.946l.007.17v5.5a2.25 2.25 0 0 1-2.096 2.246l-.154.005H14.5l.001 4.245a.75.75 0 0 1-1.493.102L13 21.245V17h-2zm3.517-17.751H9.516v3.502h5.001z"></svg:path>`,
})
export class FluentUsbPlug24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
