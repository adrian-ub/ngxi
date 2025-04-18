import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEditaltIcon],svg[whh-editalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H192q-26 0-45-18.5T128 960V600l279 278q18 19 46 17h123q26 0 45-18.5t19-45.5V704q0-23-19-41L128 170V65q0-27 19-45.5T192 1h448v352q0 13 9 22.5t23 9.5h351v575q0 27-18.5 45.5T960 1024M704 0q26 0 44 18l256 257q19 19 19 46H704zM79 444l-68-67Q0 365 0 349t11-27l55-55q11-11 27.5-11t27.5 11l67 67zm497 291v64q0 14-9.5 23t-22.5 9h-64q-14 0-26-11L130 496l110-110l324 324q12 12 12 25"></svg:path>`,
})
export class WhhEditaltIcon {
  readonly viewBox = input("0 0 1023 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
