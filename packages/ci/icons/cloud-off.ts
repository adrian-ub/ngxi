import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCloudOffIcon],svg[ci-cloud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 19H6a5 5 0 0 1-.332-9.99a7 7 0 0 1 1.333-1.909M19 19L5 5m14 14l2 2M10 5.29A7.002 7.002 0 0 1 18.93 11H19a3.999 3.999 0 0 1 3.122 6.5"></svg:path>`,
})
export class CiCloudOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
