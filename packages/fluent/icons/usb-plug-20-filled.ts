import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentUsbPlug20FilledIcon],svg[fluent-usb-plug-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V6h.079C14.137 6 15 6.853 15 7.912v5.176A1.916 1.916 0 0 1 13.079 15H12v2.5a.5.5 0 0 1-1 0V15H9v2.5a.5.5 0 0 1-1 0V15H6.921A1.916 1.916 0 0 1 5 13.088V7.912C5 6.852 5.863 6 6.921 6H7zM8 6h4V3H8z"></svg:path>`,
})
export class FluentUsbPlug20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
