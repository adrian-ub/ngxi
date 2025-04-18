import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faAlignJustifyIcon],svg[fa-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1216v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 576V448q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1664q26 0 45 19t19 45"></svg:path>`,
})
export class FaAlignJustifyIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}
