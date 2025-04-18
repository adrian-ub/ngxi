import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSlidersmiddleIcon],svg[whh-slidersmiddle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.305 576h-256V448h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-384h-256V64h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-352 832h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-608 639.5q0-26.5 18.5-45t45.5-18.5h256v128h-256q-27 0-45.5-19t-18.5-45.5m0-384q0-26.5 18.5-45t45.5-18.5h256v128h-256q-27 0-45.5-19t-18.5-45.5m0-384q0-26.5 18.5-45t45.5-18.5h256v128h-256q-27 0-45.5-19t-18.5-45.5m1024 768q0 26.5-18.5 45.5t-45.5 19h-256V832h256q27 0 45.5 18.5t18.5 45"></svg:path>`,
})
export class WhhSlidersmiddleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
