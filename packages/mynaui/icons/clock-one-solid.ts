import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiClockOneSolidIcon],svg[mynaui-clock-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.386.398l2.5-4a.75.75 0 1 0-1.272-.795L12.75 9.385z"></svg:path>`,
})
export class MynauiClockOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
