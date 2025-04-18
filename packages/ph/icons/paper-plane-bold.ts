import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneBoldIcon],svg[ph-paper-plane-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.42 198.2l-.06-.09L145.3 30.17a20 20 0 0 0-34.82 0L14.58 198.2a20 20 0 0 0 24.06 28.65L128 196.67l89.36 30.18a20 20 0 0 0 6.69 1.15a20 20 0 0 0 17.37-29.8M140 175.39V120a12 12 0 0 0-24 0v55.39l-75.28 25.43l87.17-152.76l87.37 152.75Z"></svg:path>`,
})
export class PhPaperPlaneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
