import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlackpearlKangeqiuIcon],svg[arcticons-blackpearl-kangeqiu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.72 5.5v37L40.28 8.065M31.64 42.5h6.446m-3.223-12.828V42.5m0-4.817h-4.257m4.257-2.407h-5.33m5.33-2.494h-5.208m5.208 1.328h5.41m-5.41 1.976h5.125m-5.125 1.597h4.256m-4.256-5.155h5.126m-9.395-1.531h8.322m-4.053-1.325h2.688m-2.688 0h-2.628m4.775 9.634h-4.195"></svg:path>`,
})
export class ArcticonsBlackpearlKangeqiuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
