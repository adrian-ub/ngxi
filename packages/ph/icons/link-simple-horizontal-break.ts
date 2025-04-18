import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakIcon],svg[ph-link-simple-horizontal-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 128a40 40 0 0 0 40 40h40a8 8 0 0 1 0 16H64a56 56 0 0 1 0-112h40a8 8 0 0 1 0 16H64a40 40 0 0 0-40 40m168-56h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
