import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBranchOneIcon],svg[icon-park-solid-branch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 33V15"></svg:path><svg:path fill="currentColor" d="M10 9h28v6H10z"></svg:path><svg:path d="m8 32l6-7h19.974L40 32"></svg:path><svg:path fill="currentColor" d="M4 33h8v8H4zm16 0h8v8h-8zm16 0h8v8h-8z"></svg:path></svg:g>`,
})
export class IconParkSolidBranchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
