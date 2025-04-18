import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSwitchIcon],svg[whh-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768.5-960q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m0 768q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m576.5-576q0-27-19-45.5t-45-18.5h-256q-27 0-45.5 18.5t-18.5 45.5v512q0 26 18.5 45t45.5 19h256q26 0 45-19t19-45zm192-192q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m0 768q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m-320-64h-128q-27 0-45.5-19t-18.5-45v-64q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v64q0 26-19 45t-45 19m0-256h-128q-27 0-45.5-19t-18.5-45V320q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhSwitchIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
