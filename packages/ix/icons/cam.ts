import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCamIcon],svg[ix-cam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 384H42.667v-42.667h128V128h170.666v213.333h128V384H298.667V170.667h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxCamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
