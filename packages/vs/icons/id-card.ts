import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsIdCardIcon],svg[vs-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 11q-75 0-127.5 52.5T0 191v1167q0 74 52.5 127t127.5 53h1741q75 0 127.5-53t52.5-127V191q0-75-52.5-127.5T1921 11zm1798 1403H123V135h1855zM1469 358q-112 0-174 76.5T1233 631q-2 133 117 235q15 12 9 30l-18 50q-8 17-25 26.5t-70 27.5q-46 8-89 24v167h624v-167q-44-16-88-24q-53-18-70.5-27.5T1597 946l-17-50q-6-18 9-30q119-102 117-235q0-120-62.5-196.5T1469 358M302 445v104h649V445zm0 278v104h649V723zm0 277v104h649v-104z"></svg:path>`,
})
export class VsIdCardIcon {
  readonly viewBox = input("0 0 2112 1568")
  readonly width = input("1.35em")
  readonly height = input("1em")
}
