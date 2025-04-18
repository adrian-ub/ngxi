import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserSafetyIcon],svg[tdesign-user-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m10.5 8v3.634a1 1 0 0 0 .453.837L19 21.308l2.047-1.337a1 1 0 0 0 .453-.837V15.5zm-2-2h9v5.634a3 3 0 0 1-1.36 2.511L19 23.697l-3.14-2.052a3 3 0 0 1-1.36-2.511zM8 16a4 4 0 0 0-4 4h8.55v2H2v-2a6 6 0 0 1 6-6h4.5v2z"></svg:path>`,
})
export class TdesignUserSafetyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
