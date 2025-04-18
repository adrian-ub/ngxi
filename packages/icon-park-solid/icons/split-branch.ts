import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSplitBranchIcon],svg[icon-park-solid-split-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M44 44V4H24v13l9 9v18zM4 4v40h21V30l-9-9V4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 44V4H24v13l9 9v18zM4 4v40h21V30l-9-9V4z"></svg:path></svg:g>`,
})
export class IconParkSolidSplitBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
