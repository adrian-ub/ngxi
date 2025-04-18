import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerProbeOffIcon],svg[mdi-thermometer-probe-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3.64l7.24 7.24l-6.43 6.43a2.76 2.76 0 0 0 0 3.89a2.76 2.76 0 0 0 3.89 0l6.43-6.43l7.6 7.6L22 21.1L3.27 2.37zm8.23 8.22l1.91 1.91a1.376 1.376 0 1 1-1.91-1.91m4.23-.86L13 9.55l.47-.08l6-6L22 2l-1.46 2.54l-6 6z"></svg:path>`,
})
export class MdiThermometerProbeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
