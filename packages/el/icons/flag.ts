import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFlagIcon],svg[el-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 75.63V1200h159.302V650.952C606.706 528.936 893.764 1025.558 1200 718.693V75.63c-475.667 308.371-726.319-274.04-1200 0"></svg:path>`,
})
export class ElFlagIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
