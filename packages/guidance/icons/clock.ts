import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceClockIcon],svg[guidance-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m17.5 17.5l-.404-.566A19.7 19.7 0 0 0 12 12l.055-.493A34.2 34.2 0 0 0 12 3.5M22.498 12c0-5.798-4.7-10.498-10.498-10.498S1.502 6.202 1.502 12S6.202 22.498 12 22.498S22.498 17.798 22.498 12Z"></svg:path>`,
})
export class GuidanceClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
