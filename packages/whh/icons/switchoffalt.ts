import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSwitchoffaltIcon],svg[whh-switchoffalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-767.5-960q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m0 768q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m639.5-512h-512q-27 0-45.5 18.5t-18.5 45.5v256q0 26 18.5 45t45.5 19h512q26 0 45-19t19-45V384q0-27-19-45.5t-45-18.5m127.5-256q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-19-45t-45.5-18.5m0 768q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-19-45t-45.5-18.5m-191.5-192h-128q-27 0-45.5-19t-18.5-45V448q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5v128q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhSwitchoffaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
