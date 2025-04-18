import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsZUpperCaseIcon],svg[ls-z-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 0h469L124 663h365v72H0L379 71H34z"></svg:path>`,
})
export class LsZUpperCaseIcon {
  readonly viewBox = input("0 0 503 735")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
