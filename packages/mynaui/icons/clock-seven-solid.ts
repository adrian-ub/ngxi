import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiClockSevenSolidIcon],svg[mynaui-clock-seven-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v5.785l-2.386 3.817a.75.75 0 1 0 1.272.796l2.5-4A.75.75 0 0 0 12.75 12z"></svg:path>`,
})
export class MynauiClockSevenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
