import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatterySlashIcon],svg[ix-battery-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m200.897 170.666l170.668 170.667l80.854 80.854l-30.17 30.17l-68.358-68.358L42.667 384V128l55.225-.001l-38.31-38.31l30.17-30.169zm110.328 170.667L140.559 170.666H85.334v170.667zM426.667 128v74.666h42.667v106.667h-42.667v26.762L384 293.429V170.667l-122.763-.001l-42.667-42.667z"></svg:path>`,
})
export class IxBatterySlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
