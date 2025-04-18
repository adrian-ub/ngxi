import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsMUpperCaseIcon],svg[ls-m-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l310 443L620 0v753h-73V229L310 568L73 229v524H0z"></svg:path>`,
})
export class LsMUpperCaseIcon {
  readonly viewBox = input("0 0 620 753")
  readonly width = input("0.83em")
  readonly height = input("1em")
}
