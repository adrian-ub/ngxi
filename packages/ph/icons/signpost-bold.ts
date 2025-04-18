import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSignpostBoldIcon],svg[ph-signpost-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248.92 104L215.3 66.62A20 20 0 0 0 200.44 60H140V32a12 12 0 0 0-24 0v28H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h76v60a12 12 0 0 0 24 0v-60h60.44a20 20 0 0 0 14.86-6.62L248.92 120a12 12 0 0 0 0-16m-50.26 36H44V84h154.66l25.2 28Z"></svg:path>`,
})
export class PhSignpostBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
