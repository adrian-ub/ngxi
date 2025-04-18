import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCalculatoraltIcon],svg[whh-calculatoralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-480-768h-96v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v96q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m24.5 327.5q-7.5-7.5-18.5-7.5t-19 7l-115 115l-115-115q-8-7-19-7t-18.5 7.5t-7.5 18.5t7 19l115 115l-114 114q-8 8-8 19t8 19t19 8t19-8l114-114l114 114q8 8 19 8t19-8t8-19t-8-19l-114-114l115-115q7-8 7-19t-7.5-18.5m423.5-327.5h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 384h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhCalculatoraltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
