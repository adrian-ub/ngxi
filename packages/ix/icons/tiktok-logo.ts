import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTiktokLogoIcon],svg[ix-tiktok-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 149.333A99.837 99.837 0 0 1 341.333 42.667h-74.666v288a64.005 64.005 0 0 1-44.485 61.132a64 64 0 0 1-71.719-23.928a64.005 64.005 0 0 1 1.134-75.597A64 64 0 0 1 224 270.507v-76.8A141.4 141.4 0 0 0 202.667 192a138.66 138.66 0 0 0-128.112 85.601a138.668 138.668 0 1 0 266.778 53.066v-137.6A187.53 187.53 0 0 0 448 224z"></svg:path>`,
})
export class IxTiktokLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
