import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditDrawingBoardBoardDesignDrawingEaselProcessIcon],svg[streamline-interface-edit-drawing-board-board-design-drawing-easel-process-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 2.5h8a1 1 0 0 1 1 1V10h0H2h0V3.5a1 1 0 0 1 1-1ZM.5 10h13M7 2.5v-2M5.5 10L3 13.5M8.5 10l2.5 3.5"></svg:path>`,
})
export class StreamlineInterfaceEditDrawingBoardBoardDesignDrawingEaselProcessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
