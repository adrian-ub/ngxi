import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTagChevronFillIcon],svg[ph-tag-chevron-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.66 132.44L201 200.88a16 16 0 0 1-13.28 7.12H32a8 8 0 0 1-6.66-12.44L70.39 128l-45-67.56A8 8 0 0 1 32 48h155.72A16 16 0 0 1 201 55.12l45.63 68.44a8 8 0 0 1 .03 8.88"></svg:path>`,
})
export class PhTagChevronFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
