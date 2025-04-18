import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisClockEightIcon],svg[uis-clock-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m1 10c0 .4-.2.7-.5.9l-2.6 1.5c-.5.3-1.1.1-1.4-.4s-.1-1.1.4-1.4l2.1-1.2V7c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisClockEightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
