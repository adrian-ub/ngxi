import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMicrowaveIcon],svg[whh-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.226 768h-64v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-640v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-64q-26 0-45-19t-19-45V64q0-26 19-45t45-19h896q27 0 45.5 18.5t18.5 45.5v640q0 27-18.5 45.5t-45.5 18.5m-96-256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-64 64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m0-128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-96-256q0-27-18.5-45.5t-45.5-18.5h-512q-26 0-45 18.5t-19 45.5v384q0 26 19 45t45 19h512q27 0 45.5-19t18.5-45zm256-32q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm-32 224q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhMicrowaveIcon {
  readonly viewBox = input("0 0 1025 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
