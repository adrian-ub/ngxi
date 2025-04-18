import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSeatIcon],svg[zmdi-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 320v-64h341v128h-64v-64H107v64H43zm320-171h64v64h-64zM0 149h64v64H0zm320 64H107V43q0-18 12.5-30.5T149 0h128q18 0 30.5 12.5T320 43z"></svg:path>`,
})
export class ZmdiSeatIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
