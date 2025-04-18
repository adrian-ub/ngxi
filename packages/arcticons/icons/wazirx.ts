import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWazirxIcon],svg[arcticons-wazirx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.669 36.444L43.5 13.81L14.612 36.044m-8.225 0L24 5.882m-8.884 15.215L4.5 13.447l1.887 22.597m35.282.4v5.674m0 0H6.402m-.015-6.074v6.022m0-6.022h35.138M33.24 21.706L24 5.882"></svg:path>`,
})
export class ArcticonsWazirxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
