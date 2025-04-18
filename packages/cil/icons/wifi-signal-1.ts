import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWifiSignal1Icon],svg[cil-wifi-signal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.778 480h36.444L504 151.842V124.4l-.215-.15a432.02 432.02 0 0 0-495.57 0L8 124.4v27.438Zm-58.911-139.925a158.22 158.22 0 0 1 154.266 0L256 450.232ZM256 78.128a397.87 397.87 0 0 1 216.144 63.419L351.561 313.758a190.14 190.14 0 0 0-191.122 0L39.856 141.547A397.87 397.87 0 0 1 256 78.128"></svg:path>`,
})
export class CilWifiSignal1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
