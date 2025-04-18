import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSliderascIcon],svg[whh-sliderasc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-32-448h-256V448h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-384h-640V64h640q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5m-736 64h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-160 192h256v128h-256q-26 0-45-19t-19-45.5t19-45t45-18.5m352 192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5zm-352 192h640v128h-640q-26 0-45-19t-19-45.5t19-45t45-18.5"></svg:path>`,
})
export class WhhSliderascIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
