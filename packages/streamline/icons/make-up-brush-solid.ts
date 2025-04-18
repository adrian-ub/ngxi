import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMakeUpBrushSolidIcon],svg[streamline-make-up-brush-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.127 6.894L9.468 8.602a1 1 0 0 0-.076-.084l-3.77-3.77l-.052-.049l1.706-3.655A1 1 0 0 1 8.89.759l.587.588l-1.342 1.777a.625.625 0 1 0 .998.753l1.236-1.638l1.62 1.62l-1.621 1.024a.625.625 0 1 0 .668 1.057l1.858-1.176l.517.517a1 1 0 0 1-.284 1.613m-4.62 2.508l-3.77-3.77l-3.616 3.616a2.666 2.666 0 1 0 3.77 3.77z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMakeUpBrushSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
