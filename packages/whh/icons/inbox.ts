import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhInboxIcon],svg[whh-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.428 896v64q0 26-19 45t-45 19h-896q-27 0-45.5-19t-18.5-45V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5zm-128-640q0-53-37.5-90.5t-90.5-37.5h-512q-53 0-90.5 37.5t-37.5 90.5v384q0 27 18.5 45.5t45.5 18.5h32q20 0 38 8.5t26 23.5q5 17 16.5 66t15.5 62q8 20 23.5 26t45.5 6h249q29 0 43.5-6t22.5-26q18-90 32-128q13-32 64-32h32q26 0 45-18.5t19-45.5zm-192 320h-384q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5h384q26 0 45 19t19 45t-19 45t-45 19m0-192h-384q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h384q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhInboxIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
