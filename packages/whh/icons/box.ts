import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBoxIcon],svg[whh-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-896q-26 0-45-18.5T.06 960V64q0-26 19-45t45-19h896q26 0 45 19t19 45v896q0 27-19 45.5t-45 18.5m-569-256h57v96q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-96h57q7-8 7-19t-7-19l-104-83q-7-8-17.5-8t-17.5 8l-103 83q-8 7-8 18.5t8 19.5m249-704h-256v256q0 27 19 45.5t45 18.5h128q27 0 45.5-18.5t18.5-45.5zm256 608q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5q0 31 18 55.5t46 34.5v70h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32v-70q28-10 46-34.5t18-55.5"></svg:path>`,
})
export class WhhBoxIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
