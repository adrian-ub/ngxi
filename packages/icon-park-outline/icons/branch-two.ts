import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBranchTwoIcon],svg[icon-park-outline-branch-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-22 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path><svg:path d="M14 12v24v-3c0-8 22-9 22-17v-4"></svg:path></svg:g>`,
})
export class IconParkOutlineBranchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
