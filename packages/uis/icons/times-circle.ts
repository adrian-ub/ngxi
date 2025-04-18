import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisTimesCircleIcon],svg[uis-times-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.7 12.3c.4.4.4 1 0 1.4s-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L13.4 12z"></svg:path>`,
})
export class UisTimesCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
