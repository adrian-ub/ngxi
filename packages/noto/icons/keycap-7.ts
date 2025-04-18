import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoKeycap7Icon],svg[noto-keycap-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="notoKeycap70" x1="9.98" x2="123.28" y1="-831.352" y2="-945.122" gradientTransform="matrix(1 0 0 -1 -4 -826.11)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#81D4FA"></svg:stop><svg:stop offset="1" stop-color="#0094D6"></svg:stop></svg:lineargradient><svg:path fill="url(#notoKeycap70)" d="M116.46 123.96h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8"></svg:path><svg:path fill="#424242" d="M116.46 3.96h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8" opacity=".2"></svg:path><svg:path fill="#427687" d="M116.46 3.96h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8"></svg:path><svg:path fill="#8CAFBF" d="M122.16 6.26a8.4 8.4 0 0 0-5.7-2.3h-104c-4.42 0-8 3.58-8 8v104c.02 2.12.84 4.16 2.3 5.7l16.8-16.8h76a5.91 5.91 0 0 0 5.9-5.9v-76z"></svg:path><svg:path fill="#FAFAFA" d="m88.26 35.56l-27 61.2c-.3.67-.97 1.1-1.7 1.1h-8c-1.03.01-1.88-.81-1.89-1.85c0-.3.06-.59.19-.85l25.1-54.5a1.887 1.887 0 0 0-1.7-2.7h-30.9a1.9 1.9 0 0 1-1.9-1.9v-5.5c0-1.05.85-1.9 1.9-1.9h44.2c1.05 0 1.9.85 1.9 1.9v4.1c-.05.31-.11.61-.2.9"></svg:path><svg:path fill="#B4E1ED" d="M40.16 12.86c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3c3.4 0 3.4-7.9 6.2-12.3c5.4-8.7 18.9-10.6 18.9-13.6" opacity=".5"></svg:path>`,
})
export class NotoKeycap7Icon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
