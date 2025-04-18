import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosFoundationdbIconIcon],svg[logos-foundationdb-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0073E0" d="M0 123.59v-6.764h53.686V89.337l53.341 5.346v22.143h54.103V89.337L256 99.264v24.326z"></svg:path><svg:path fill="#289DFC" d="M0 80.169L53.686 72.3V44.812l53.341 13.219v22.144L161.13 72.3V44.812L256 68.721v24.434l-94.87-13.219l-54.103 7.111l-53.341-7.111L0 87.042z"></svg:path><svg:path fill="#9ACEFE" d="m107.027 43.905l54.103-16.417V0L256 38.942v23.671l-94.87-26.725l-54.103 14.889z"></svg:path>`,
})
export class LogosFoundationdbIconIcon {
  readonly viewBox = input("0 0 256 123.59")
  readonly width = input("2.08em")
  readonly height = input("1em")
}
