import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCheckboxemptyIcon],svg[ls-checkboxempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 677V87h591v590zm517-516H74v443h443z"></svg:path>`,
})
export class LsCheckboxemptyIcon {
  readonly viewBox = input("0 0 591 677")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
