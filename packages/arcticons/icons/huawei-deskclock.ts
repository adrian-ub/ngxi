import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiDeskclockIcon],svg[arcticons-huawei-deskclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="26.63" r="16.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.943 4.5v22.3m0 0l7.754 5.943m2.653 7.21l2.894 3.487m-23.14-3.147l-2.556 3.147M19.019 4.5h9.622"></svg:path>`,
})
export class ArcticonsHuaweiDeskclockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
