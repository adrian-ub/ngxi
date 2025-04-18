import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListDashesThinIcon],svg[ph-list-dashes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 64a4 4 0 0 1 4-4h120a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m124 60H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8m0 64H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8M56 60H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhListDashesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
