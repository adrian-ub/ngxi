import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitClockIcon],svg[uit-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.848 13.067L12.5 11.711V7a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .25.433l2.598 1.5a.496.496 0 0 0 .682-.183a.5.5 0 0 0-.182-.683M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10c0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18a9.01 9.01 0 0 1 9 9a9 9 0 0 1-9 9"></svg:path>`,
})
export class UitClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
