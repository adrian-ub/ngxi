import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilClockTwoIcon],svg[uil-clock-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m2.098-10.366L13 10.268V7a1 1 0 0 0-2 0v5a1 1 0 0 0 1.5.866l2.598-1.5a1 1 0 1 0-1-1.732"></svg:path>`,
})
export class UilClockTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
