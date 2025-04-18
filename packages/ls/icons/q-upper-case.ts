import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsQUpperCaseIcon],svg[ls-q-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m676.018 813l-76-95c-41 25-86 42-136 50c-216 38-421-101-458-312c-38-210 108-411 324-449s421 101 458 312c25 137-30 271-130 357l110 137zm-187-350l124 157c66-57 107-141 107-233c0-173-145-313-323-313s-322 140-322 313s144 315 322 315c57 0 111-16 158-40l-158-199z"></svg:path>`,
})
export class LsQUpperCaseIcon {
  readonly viewBox = input("0 0 795 813")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
