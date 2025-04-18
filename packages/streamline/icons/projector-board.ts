import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineProjectorBoardIcon],svg[streamline-projector-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-12 3h13m-6.5 7v3m-1.5-3l-3 3m6-3l3 3"></svg:path>`,
})
export class StreamlineProjectorBoardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
