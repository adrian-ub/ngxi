import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyusIcon],svg[arcticons-myus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.63 14.073L14.072 19.37l-2.47-13.034L22.142 2.5l6.486 11.573Zm-9.26 19.854l14.557-5.298l2.47 13.034l-10.54 3.837z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.927 28.63L28.63 14.072l13.034-2.47l3.837 10.54l-11.573 6.486Zm-19.854-9.26l5.298 14.557l-13.034 2.47L2.5 25.858l11.573-6.486ZM8.517 35.985c3.797 5.31 9.743 8.082 16.252 7.578M23.23 4.432c6.509-.504 12.454 2.269 16.252 7.579M4.434 24.767C3.93 18.26 6.703 12.313 12.012 8.515M35.986 39.48c5.31-3.797 8.083-9.743 7.579-16.252"></svg:path>`,
})
export class ArcticonsMyusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
