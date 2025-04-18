import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPowerPlugOffIcon],svg[mdi-power-plug-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-5.53-5.53l-.81.8v3h-5v-3L6 14.5V9c0-.3.1-.59.25-.86L1.11 3l1.28-1.27l19.72 19.73zM18 14.5V9c0-1-1-2-2-2V3h-2v4h-3.8l7.65 7.65zM10 3H8v1.8l2 2z"></svg:path>`,
})
export class MdiPowerPlugOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
