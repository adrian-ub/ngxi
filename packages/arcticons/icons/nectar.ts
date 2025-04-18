import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNectarIcon],svg[arcticons-nectar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.239 34.196c-5.049 10.678-7.49 8.675-10.832 3.567c-1.328-3.117-6.661-6.672-13.772-6.447c-7.562.889-20.67-2.442-12.599-15.787C12.395 5.86 25.388 3.176 35.057 9.534a20.954 20.954 0 0 1 8.182 24.662"></svg:path>`,
})
export class ArcticonsNectarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
