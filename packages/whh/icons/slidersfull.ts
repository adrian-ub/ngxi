import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSlidersfullIcon],svg[whh-slidersfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.232 1024h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-992 640q0-27 18.5-45.5t45.5-18.5h640v128h-640q-27 0-45.5-18.5T.232 896m0-384q0-27 18.5-45.5t45.5-18.5h640v128h-640q-27 0-45.5-18.5T.232 512m0-384q0-27 18.5-45.5t45.5-18.5h640v128h-640q-27 0-45.5-18.5T.232 128"></svg:path>`,
})
export class WhhSlidersfullIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
