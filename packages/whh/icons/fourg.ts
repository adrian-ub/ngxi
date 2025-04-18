import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFourgIcon],svg[whh-fourg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.226 832h-384q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h384q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5h-256v448h128V512q-26 0-45-18.5t-19-45.5v-64q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v384q0 27-18.5 45.5t-45.5 18.5m-576 0h-64q-26 0-45-18.5t-19-45.5V512h-192q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h64q27 0 45.5 19t18.5 45v256h64V64q0-26 19-45t45-19h64q27 0 45.5 19t18.5 45v704q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhFourgIcon {
  readonly viewBox = input("0 0 1025 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
