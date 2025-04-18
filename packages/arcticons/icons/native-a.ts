import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNativeAIcon],svg[arcticons-native-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.434 7.298S27.715 40.34 15.692 40.703c-13.99-.165-13.869-33.285 2.17-33.405C31.852 7.504 28.39 40.22 37.4 40.1c1.604.024 3.063-1.077 5.101-5.029"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.77 28.667v-10.01l8.321 10.01v-10.01"></svg:path>`,
})
export class ArcticonsNativeAIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
