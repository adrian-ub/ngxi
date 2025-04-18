import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsJUpperCaseIcon],svg[ls-j-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M317 529V0h72v527c0 66-28 125-72 166c-41 38-96 61-156 61c-62 0-120-25-161-66l52-51c28 29 66 46 109 46c85 0 155-69 156-154"></svg:path>`,
})
export class LsJUpperCaseIcon {
  readonly viewBox = input("0 0 389 754")
  readonly width = input("0.52em")
  readonly height = input("1em")
}
