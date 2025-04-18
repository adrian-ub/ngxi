import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBoldIcon],svg[ph-link-simple-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 116h96a12 12 0 0 1 0 24H80a12 12 0 0 1 0-24m24 48H64a36 36 0 0 1 0-72h40a12 12 0 0 0 0-24H64a60 60 0 0 0 0 120h40a12 12 0 0 0 0-24m88-96h-40a12 12 0 0 0 0 24h40a36 36 0 0 1 0 72h-40a12 12 0 0 0 0 24h40a60 60 0 0 0 0-120"></svg:path>`,
})
export class PhLinkSimpleHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
