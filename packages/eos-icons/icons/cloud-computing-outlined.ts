import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCloudComputingOutlinedIcon],svg[eos-icons-cloud-computing-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6.147a5 5 0 0 0-.65-.107a7.492 7.492 0 0 0-14-2A6 6 0 0 0 4 4.365A5.98 5.98 0 0 0 4 15.65v-2.204a3.976 3.976 0 0 1 0-6.901a3.9 3.9 0 0 1 1.56-.515l1.07-.11l.5-.95a5.487 5.487 0 0 1 10.26 1.46l.3 1.5l1.53.11a3 3 0 0 1 .78.171a2.963 2.963 0 0 1 0 5.604v2.084a4.972 4.972 0 0 0 0-9.752"></svg:path><svg:path fill="currentColor" d="M6 10v5h12v-5Zm7 3H7v-1h6Zm1.5 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5m2 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5M6 17v5h12v-5Zm7 3H7v-1h6Zm1.5 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5m2 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class EosIconsCloudComputingOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
