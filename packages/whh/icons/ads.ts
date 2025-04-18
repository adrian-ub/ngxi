import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAdsIcon],svg[whh-ads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 640h-64v256h32q50 0 73 35t23 93h-384q0-58 23-93t73-35h32V640h-512v256h32q50 0 73 35t23 93h-384q0-58 23-93t73-35h32V640h-64q-26 0-45-18.5t-19-45.5V64q0-26 18.5-45t45.5-19h192v128h-32q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-32V0h384v128h-32q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-32V0h192q26 0 45 19t19 45v512q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhAdsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
