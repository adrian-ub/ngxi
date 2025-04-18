import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBugLinearIcon],svg[solar-bug-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19 15v-3.062A3.94 3.94 0 0 0 15.063 8H8.936A3.94 3.94 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z"></svg:path><svg:path d="M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1"></svg:path><svg:path stroke-linecap="round" d="M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"></svg:path></svg:g>`,
})
export class SolarBugLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
