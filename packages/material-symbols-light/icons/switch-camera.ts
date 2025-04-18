import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchCameraIcon],svg[material-symbols-light-switch-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 20q-.691 0-1.153-.462T3 18.384V7.616q0-.691.463-1.153T4.615 6h2.958l1.85-2h5.154l1.85 2h2.958q.69 0 1.152.463T21 7.616v10.769q0 .69-.463 1.153T19.385 20zm5.076-3.654l.708-.707l-2.088-2.089h7.377L13.6 15.639l.708.707l3.308-3.307l-3.308-3.308l-.708.708l2.1 2.111H8.3l2.1-2.111l-.708-.708l-3.308 3.308z"></svg:path>`,
})
export class MaterialSymbolsLightSwitchCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
