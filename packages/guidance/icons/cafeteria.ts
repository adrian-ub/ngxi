import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceCafeteriaIcon],svg[guidance-cafeteria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 20.5h12.5v-7a3 3 0 1 1 3 3H20m-20 7h24m-9-13H2.5v.25l.063.1A19 19 0 0 1 5.5 21m0-21v1A6.5 6.5 0 0 0 12 7.5m2.5.5V4.5H12A3.5 3.5 0 0 1 8.5 1V0"></svg:path>`,
})
export class GuidanceCafeteriaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
