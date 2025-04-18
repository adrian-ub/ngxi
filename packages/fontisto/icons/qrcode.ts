import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoQrcodeIcon],svg[fontisto-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.455 17.455h2.182v2.182h-2.182z"></svg:path><svg:path fill="currentColor" d="M13.091 24H24V13.091H13.091zm2.181-8.727h6.545v6.529h-6.545zm2.183-10.909h2.182v2.182h-2.182zM8.727 15.272H6.545V13.09H0v10.909h2.182v-6.545h2.182v2.182h6.545v-6.545H8.727z"></svg:path><svg:path fill="currentColor" d="M4.364 21.818h2.182V24H4.364zm4.363 0h2.182V24H8.727zM4.364 4.364h2.182v2.182H4.364z"></svg:path><svg:path fill="currentColor" d="M0 10.909h10.909V0H0zm2.182-8.727h6.545v6.545H2.182zM13.091 0v10.909H24V0zm8.727 8.727h-6.545V2.182h6.545z"></svg:path>`,
})
export class FontistoQrcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
