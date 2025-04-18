import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsVUpperCaseIcon],svg[ls-v-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M548 0L273 762L0 0h82l191 526L466 0z"></svg:path>`,
})
export class LsVUpperCaseIcon {
  readonly viewBox = input("0 0 548 762")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
