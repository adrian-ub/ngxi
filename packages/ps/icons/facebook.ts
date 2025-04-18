import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFacebookIcon],svg[ps-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 91v63H4v78h47v230h95V232h65q6-37 8-78h-72v-53q0-6 6.5-12.5T168 82h52V2h-71q-28 0-48.5 8.5T71 29.5T57 55t-5.5 21.5T51 91"></svg:path>`,
})
export class PsFacebookIcon {
  readonly viewBox = input("0 0 224 488")
  readonly width = input("0.46em")
  readonly height = input("1em")
}
