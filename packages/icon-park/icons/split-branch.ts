import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSplitBranchIcon],svg[icon-park-split-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M44 44V4H24V17L33 26V44H44Z"></svg:path><svg:path fill="#2F88FF" d="M4 4V44H25V30L16 21V4H4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 44V4H24V17L33 26V44H44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 4V44H25V30L16 21V4H4Z"></svg:path></svg:g>`,
})
export class IconParkSplitBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
