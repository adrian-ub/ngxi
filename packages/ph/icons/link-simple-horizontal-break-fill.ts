import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakFillIcon],svg[ph-link-simple-horizontal-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M112 168H80a40 40 0 0 1 0-80h32a8 8 0 0 1 0 16H80a24 24 0 0 0 0 48h32a8 8 0 0 1 0 16m64 0h-32a8 8 0 0 1 0-16h32a24 24 0 0 0 0-48h-32a8 8 0 0 1 0-16h32a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
