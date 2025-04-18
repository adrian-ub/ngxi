import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisClockTwoIcon],svg[uis-clock-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.1 9.4l-2.6 1.5c-.5.3-1.1.1-1.4-.4c-.1-.2-.1-.3-.1-.5V7c0-.6.4-1 1-1s1 .4 1 1v3.3l1.1-.6c.5-.3 1.1-.1 1.4.4s.1 1-.4 1.3"></svg:path>`,
})
export class UisClockTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
