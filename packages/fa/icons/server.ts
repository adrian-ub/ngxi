import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faServerIcon],svg[fa-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1280h1024v-128H128zm0-512h1024V640H128zm1568 448q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68M128 256h1024V128H128zm1568 448q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68m0-512q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68m96 832v384H0v-384zm0-512v384H0V512zm0-512v384H0V0z"></svg:path>`,
})
export class FaServerIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}
