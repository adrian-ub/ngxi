import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixThermometerFilledIcon],svg[ix-thermometer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 63.667c0-11.599 9.402-21 21-21h86c11.598 0 21 9.401 21 21v213.658c25.908 19.461 42.667 50.444 42.667 85.342c0 58.91-47.757 106.666-106.667 106.666s-106.667-47.756-106.667-106.666c0-34.898 16.759-65.881 42.667-85.342zM341.333 64H384v21.333h-42.667zM384 128h-42.667v21.333H384zm-42.667 64H384v21.333h-42.667zM384 256h-42.667v21.333H384zM256 405.333c23.564 0 42.667-19.102 42.667-42.666C298.667 339.102 279.564 320 256 320s-42.667 19.102-42.667 42.667c0 23.564 19.103 42.666 42.667 42.666" clip-rule="evenodd"></svg:path>`,
})
export class IxThermometerFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
