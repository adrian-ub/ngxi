import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineHorizontalThinIcon],svg[ph-arrows-in-line-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0M66.83 93.17a4 4 0 0 0-5.66 5.66L86.34 124H16a4 4 0 0 0 0 8h70.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66ZM240 124h-70.34l25.17-25.17a4 4 0 1 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 0 0 5.66-5.66L169.66 132H240a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhArrowsInLineHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
