import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEnvelopeIcon],svg[whh-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512.426 449l-449-449h898zm-505 284q-7-14-7-29V64q0-15 7-29l350 349zm466-232q6 5 15.5 8t16.5 3h7q26 1 39-11l71-72l339 339h-898l339-339zm544-466q7 14 7 29v640q0 15-7 29l-350-349z"></svg:path>`,
})
export class WhhEnvelopeIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
