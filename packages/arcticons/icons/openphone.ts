import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenphoneIcon],svg[arcticons-openphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.293 38.023C37.14 38.023 43.5 31.745 43.5 24S37.14 9.977 29.293 9.977S15.085 16.255 15.085 24s6.36 14.023 14.208 14.023m-14.15-3.519c5.879 0 10.644-4.703 10.644-10.504s-4.765-10.504-10.644-10.504S4.5 18.199 4.5 23.999s4.765 10.505 10.643 10.505"></svg:path>`,
})
export class ArcticonsOpenphoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
