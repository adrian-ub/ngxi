import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListDashesDuotoneIcon],svg[ph-list-dashes-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H96V64Z" opacity=".2"></svg:path><svg:path d="M88 64a8 8 0 0 1 8-8h120a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m128 56H96a8 8 0 1 0 0 16h120a8 8 0 0 0 0-16m0 64H96a8 8 0 1 0 0 16h120a8 8 0 0 0 0-16M56 56H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 1 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 1 0 0 16h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhListDashesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
