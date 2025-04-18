import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCheckSquareIcon],svg[fa-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m685 1171l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19L640 832L429 621q-19-19-45-19t-45 19L237 723q-19 19-19 45t19 45l358 358q19 19 45 19t45-19m851-883v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaCheckSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
