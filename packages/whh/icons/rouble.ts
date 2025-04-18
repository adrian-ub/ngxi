import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRoubleIcon],svg[whh-rouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447 640H255v64h192q27 0 45.5 19t18.5 45.5t-18.5 45T447 832H255v128q0 27-18.5 45.5t-45 18.5t-45-18.5T128 960V832H64q-27 0-45.5-18.5T0 768.5T18.5 723T64 704h64v-64H64q-27 0-45.5-18.5T0 576.5T18.5 531T64 512h64V64q0-26 18.5-45T191 0h256q87 0 161 43t116.5 116.5T767 320t-42.5 160.5T608 597t-161 43m0-512H255v384h192q80 0 136-56.5t56-136T583 184t-136-56"></svg:path>`,
})
export class WhhRoubleIcon {
  readonly viewBox = input("0 0 767 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
