import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSendtobackIcon],svg[whh-sendtoback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-384q-27 0-45.5-18.5t-18.5-45.5V832h-256q-27 0-45.5-18.5t-18.5-45.5V512h-128q-27 0-45.5-18.5T.193 448V64q0-26 18.5-45t45.5-19h384q26 0 45 19t19 45v128h256q26 0 45 19t19 45v256h128q26 0 45 19t19 45v384q0 27-19 45.5t-45 18.5m-512-960h-384v384h384zm512 512h-384v384h384z"></svg:path>`,
})
export class WhhSendtobackIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
