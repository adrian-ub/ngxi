import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiInputHdmiIcon],svg[zmdi-input-hdmi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277 109h22v128l-64 128v64H64v-64L0 237V109h21V45q0-17 12.5-29.5T64 3h171q17 0 29.5 12.5T277 45zM64 45v64h43V67h21v42h43V67h21v42h43V45z"></svg:path>`,
})
export class ZmdiInputHdmiIcon {
  readonly viewBox = input("0 0 304 432")
  readonly width = input("0.71em")
  readonly height = input("1em")
}
