import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilClockFiveIcon],svg[uil-clock-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m1-8.251V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .118.472l1.5 2.799a1 1 0 0 0 1.764-.944Z"></svg:path>`,
})
export class UilClockFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
