import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMeetingCameraOutlineIcon],svg[bubbles-meeting-camera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M3.838 1h8.512s2.838 0 2.838 2.838v7.093s0 2.838-2.838 2.838H3.838S1 13.769 1 10.93V3.838S1 1 3.838 1m14.187 9.222l3.23 1.614a.71.71 0 0 0 1.026-.634V3.566a.708.708 0 0 0-1.026-.634l-3.23 1.615"></svg:path>`,
})
export class BubblesMeetingCameraOutlineIcon {
  readonly viewBox = input("0 0 23 15")
  readonly width = input("1.54em")
  readonly height = input("1em")
}
