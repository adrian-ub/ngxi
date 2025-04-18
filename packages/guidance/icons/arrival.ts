import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceArrivalIcon],svg[guidance-arrival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 20.5h24m-13.5-9.76L3 13.99c-.5-3-2.25-6.5-2.25-6.5L2 6.99s1.123.775 2.5 2.5l11.502-6.03a4.07 4.07 0 0 1 3.707-.025c1.054.525 2.346 1.152 3.291 1.556v.5l-7.85 3.59C14 13.49 12 16.49 12 16.49H9.8s.7-2.75.7-5.75Z"></svg:path>`,
})
export class GuidanceArrivalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
