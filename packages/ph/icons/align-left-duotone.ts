import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignLeftDuotoneIcon],svg[ph-align-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M72 104V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8m144 40H80a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h136a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M216 136H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h136a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16m0 56H80v-40h136zM48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m32 80h96a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16m0-56h96v40H80Z"></svg:path></svg:g>`,
})
export class PhAlignLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
