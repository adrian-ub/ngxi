import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCloudComputingIcon],svg[eos-icons-cloud-computing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10v5h12v-5Zm7 3H7v-1h6Zm1.5 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5m2 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5M6 17v5h12v-5Zm7 3H7v-1h6Zm1.5 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5m2 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5"></svg:path><svg:path fill="currentColor" d="M22.965 8a5.35 5.35 0 0 0-3.615-1.96a7.492 7.492 0 0 0-14-2A6 6 0 0 0 4 4.365A5.98 5.98 0 0 0 4 15.65V8h16v7.9a5 5 0 0 0 4-4.9a4.9 4.9 0 0 0-1.035-3"></svg:path>`,
})
export class EosIconsCloudComputingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
