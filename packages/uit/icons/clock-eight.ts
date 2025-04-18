import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitClockEightIcon],svg[uit-clock-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.5a.5.5 0 0 0-.5.5v4.691l-2.706 1.363a.5.5 0 0 0 .45.892l2.98-1.5A.5.5 0 0 0 12.5 12V7a.5.5 0 0 0-.5-.5M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10c0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18a9.01 9.01 0 0 1 9 9a9 9 0 0 1-9 9"></svg:path>`,
})
export class UitClockEightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
