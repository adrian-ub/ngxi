import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiAppmarketIcon],svg[arcticons-huawei-appmarket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.438 18.727s9.03-8.338 12.95-11.972c2.126-1.97 4.517-1.9 6.297-.266L38.731 17.54c3.117 2.695 4.77 5.096 4.77 9.216v8.534a7.42 7.42 0 0 1-7.437 7.438H11.942a7.42 7.42 0 0 1-7.437-7.438v-8.534c0-4.12-.222-5.38 2.933-8.03Zm8.682 17.661h14.817"></svg:path>`,
})
export class ArcticonsHuaweiAppmarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
