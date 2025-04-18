import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhGavelIcon],svg[whh-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.998 320h-512v128h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-384q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32V64h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v128h512q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5m-704-224q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm0 256q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm256 352q0 22 10 39.5t22 26t22 17t10 13.5v64q0 13-9.5 22.5t-22.5 9.5h-512q-13 0-22.5-9.5t-9.5-22.5v-64q0-5 10-13.5t22-17t22-26t10-39.5z"></svg:path>`,
})
export class WhhGavelIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
