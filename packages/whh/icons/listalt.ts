import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhListaltIcon],svg[whh-listalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m64-768q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v640q0 27 19 45.5t45 18.5h768q26 0 45-18.5t19-45.5zm-96 640h-512q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-512q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-512q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-640 512h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhListaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
