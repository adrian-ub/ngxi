import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleThinIcon],svg[ph-skip-forward-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m32-136a4 4 0 0 0-4 4v32.78L98.12 84.61A4 4 0 0 0 92 88v80a4 4 0 0 0 2.06 3.5a4.06 4.06 0 0 0 1.94.5a4 4 0 0 0 2.12-.61L156 135.22V168a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m-60 76.78V95.22L152.45 128Z"></svg:path>`,
})
export class PhSkipForwardCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
