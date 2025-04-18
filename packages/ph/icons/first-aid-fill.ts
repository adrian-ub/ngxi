import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFirstAidFillIcon],svg[ph-first-aid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 108v40a16 16 0 0 1-16 16h-52v52a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-52H40a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h52V40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v52h52a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhFirstAidFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
