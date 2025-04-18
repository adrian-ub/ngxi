import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowBothDirectionHorizontal1Icon],svg[lineicons-arrow-both-direction-horizontal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.068 11.934a.748.748 0 0 1 .002 1.13l-3.964 3.966a.75.75 0 0 1-1.06-1.06l2.718-2.72H4.888l2.718 2.72a.75.75 0 1 1-1.061 1.06l-3.997-4a.75.75 0 0 1 0-1.06l3.997-4a.75.75 0 0 1 1.061 1.06l-2.718 2.72h14.875l-2.718-2.72a.75.75 0 0 1 1.061-1.06z"></svg:path>`,
})
export class LineiconsArrowBothDirectionHorizontal1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
