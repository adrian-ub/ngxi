import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBranchOneIcon],svg[icon-park-outline-branch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 33V15M10 9h28v6H10zM8 32l6-7h19.974L40 32M4 33h8v8H4zm16 0h8v8h-8zm16 0h8v8h-8z"></svg:path>`,
})
export class IconParkOutlineBranchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
