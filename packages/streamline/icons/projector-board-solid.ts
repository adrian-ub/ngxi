import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineProjectorBoardSolidIcon],svg[streamline-projector-board-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v1.375H0zm0 2.625h14V9.5a1.5 1.5 0 0 1-1.5 1.5h-2.19l1.72 1.72a.75.75 0 1 1-1.06 1.06L8.19 11h-.44v2.25a.75.75 0 0 1-1.5 0V11h-.44l-2.78 2.78a.75.75 0 0 1-1.06-1.06L3.69 11H1.5A1.5 1.5 0 0 1 0 9.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineProjectorBoardSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
