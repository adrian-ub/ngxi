import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowBothDirectionVertical1Icon],svg[lineicons-arrow-both-direction-vertical-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.578 5.064V19.94l-2.72-2.718a.75.75 0 1 0-1.06 1.061l4 3.997a.75.75 0 0 0 1.06 0l4-3.997a.75.75 0 0 0-1.06-1.06l-2.72 2.717V5.064l2.72 2.718a.75.75 0 1 0 1.06-1.061l-3.97-3.967a.748.748 0 0 0-1.122.002L7.798 6.72a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class LineiconsArrowBothDirectionVertical1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
