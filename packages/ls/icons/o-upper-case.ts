import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsOUpperCaseIcon],svg[ls-o-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M788.018 318c37 211-107 412-324 450c-216 38-421-101-458-312c-38-210 108-411 324-449s421 101 458 311m-391 383c178 0 323-140 323-313s-145-315-323-315s-322 142-322 315s144 313 322 313"></svg:path>`,
})
export class LsOUpperCaseIcon {
  readonly viewBox = input("0 0 794 775")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
