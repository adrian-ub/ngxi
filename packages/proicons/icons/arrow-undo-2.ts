import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowUndo2Icon],svg[proicons-arrow-undo-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.25 12L5.957 8.707A1 1 0 0 1 5.664 8M9.25 4L5.957 7.293A1 1 0 0 0 5.664 8M7.25 19.5h6.25a5.75 5.75 0 0 0 0-11.5H5.664"></svg:path>`,
})
export class ProiconsArrowUndo2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
