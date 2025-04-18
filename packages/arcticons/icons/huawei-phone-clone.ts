import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiPhoneCloneIcon],svg[arcticons-huawei-phone-clone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.77 4.5a2.504 2.504 0 0 0-2.51 2.509v24.466a2.503 2.503 0 0 0 2.509 2.508H20.59v7.008a2.503 2.503 0 0 0 2.509 2.509h15.132a2.504 2.504 0 0 0 2.509-2.509V16.525a2.503 2.503 0 0 0-2.51-2.508H27.416V7.009a2.504 2.504 0 0 0-2.51-2.509Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.589 33.983l-.001-17.458a2.503 2.503 0 0 1 2.509-2.509h4.317M25.28 38.888l10.183-.054M13.232 12.231l17.113 19.246m.533-5.971l-.533 5.971m-5.704.586l5.704-.586"></svg:path>`,
})
export class ArcticonsHuaweiPhoneCloneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
