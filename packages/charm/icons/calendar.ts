import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCalendarIcon],svg[charm-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 3.75h12.5v10.5H1.75zm9.5-2v1.5m-6.5-1.5v1.5m-2.5 4h11.5"></svg:path>`,
})
export class CharmCalendarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
