import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsNUpperCaseIcon],svg[ls-n-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M455 571V20h72v756L72 206v550H0V0z"></svg:path>`,
})
export class LsNUpperCaseIcon {
  readonly viewBox = input("0 0 527 776")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
