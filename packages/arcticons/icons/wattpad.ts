import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWattpadIcon],svg[arcticons-wattpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.878 13.208C3.8 18.93 3.784 27.532 6.402 32.658s7.51 12.66 16.404-7.33c-.116 8.79 7.29 14.133 11 4.966s6.315-11.808 8.139-14.179c4.658-6.055-1.761-9.36-11.144 2.455c-.199-8.483-3.997-15.75-15.864 1.714c2.122-7.722-3.786-13.89-8.06-7.076"></svg:path>`,
})
export class ArcticonsWattpadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
