import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineVerticalThinIcon],svg[ph-arrows-in-line-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-94.83-29.17a4 4 0 0 0 5.66 0l32-32a4 4 0 1 0-5.66-5.66L132 86.34V16a4 4 0 0 0-8 0v70.34L98.83 61.17a4 4 0 0 0-5.66 5.66Zm5.66 58.34a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L124 169.66V240a4 4 0 0 0 8 0v-70.34l25.17 25.17a4 4 0 0 0 5.66-5.66Z"></svg:path>`,
})
export class PhArrowsInLineVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
