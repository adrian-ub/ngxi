import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapBubbleFilledIcon],svg[tdesign-map-bubble-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.074 5.386L22 2.5v15.574l-7 4.084l-6.074-3.544L2 21.5V5.926l7-4.084zM7.5 7.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.5 1a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M10 12a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.5 1a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path>`,
})
export class TdesignMapBubbleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
