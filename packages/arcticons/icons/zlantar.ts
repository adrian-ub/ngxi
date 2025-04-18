import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZlantarIcon],svg[arcticons-zlantar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.212 10.212c7.615-7.616 19.962-7.616 27.577 0L10.21 37.789c7.616 7.615 19.963 7.615 27.578 0"></svg:path>`,
})
export class ArcticonsZlantarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
