import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faAlignCenterIcon],svg[fa-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1216v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45m-384-384v128q0 26-19 45t-45 19H448q-26 0-45-19t-19-45V832q0-26 19-45t45-19h896q26 0 45 19t19 45m256-384v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V448q0-26 19-45t45-19h1408q26 0 45 19t19 45M1280 64v128q0 26-19 45t-45 19H576q-26 0-45-19t-19-45V64q0-26 19-45t45-19h640q26 0 45 19t19 45"></svg:path>`,
})
export class FaAlignCenterIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}
