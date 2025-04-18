import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faIlsIcon],svg[fa-ils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 496v496q0 14-9 23t-23 9H800q-14 0-23-9t-9-23V496q0-112-80-192t-192-80H224v1152q0 14-9 23t-23 9H32q-14 0-23-9t-9-23V32Q0 18 9 9t23-9h464q135 0 249 66.5T925.5 247T992 496m384-464v880q0 135-66.5 249T1129 1341.5T880 1408H416q-14 0-23-9t-9-23V416q0-14 9-23t23-9h160q14 0 23 9t9 23v768h272q112 0 192-80t80-192V32q0-14 9-23t23-9h160q14 0 23 9t9 23"></svg:path>`,
})
export class FaIlsIcon {
  readonly viewBox = input("0 0 1376 1408")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
