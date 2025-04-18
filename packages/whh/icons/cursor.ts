import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCursorIcon],svg[whh-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M622 637H368l142 296q12 24 3 48.5t-33.5 36t-49.5 2.5t-37-32L257 703L65 895q-27 0-46-19T0 831V24Q0 9 17.5 3T58 3t39 21l516 516q13 13 21.5 36t6 42t-18.5 19"></svg:path>`,
})
export class WhhCursorIcon {
  readonly viewBox = input("0 0 642 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
