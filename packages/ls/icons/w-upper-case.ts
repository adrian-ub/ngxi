import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsWUpperCaseIcon],svg[ls-w-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M665 550L806 24h82L676 786L444 206L212 786L0 24h82l140 526L444 0z"></svg:path>`,
})
export class LsWUpperCaseIcon {
  readonly viewBox = input("0 0 888 786")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
