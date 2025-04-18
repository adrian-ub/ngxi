import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonMoveCircleMoveButtonCircleDirectionArrowsIcon],svg[streamline-entertainment-control-button-move-circle-move-button-circle-direction-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M5.5 4L7 3l1.5 1m-3 6L7 11l1.5-1M10 5.5L11 7l-1 1.5m-6-3L3 7l1 1.5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonMoveCircleMoveButtonCircleDirectionArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
