import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalThinIcon],svg[ph-link-simple-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 124h96a4 4 0 0 1 0 8H80a4 4 0 0 1 0-8m24 48H64a44 44 0 0 1 0-88h40a4 4 0 0 0 0-8H64a52 52 0 0 0 0 104h40a4 4 0 0 0 0-8m88-96h-40a4 4 0 0 0 0 8h40a44 44 0 0 1 0 88h-40a4 4 0 0 0 0 8h40a52 52 0 0 0 0-104"></svg:path>`,
})
export class PhLinkSimpleHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
