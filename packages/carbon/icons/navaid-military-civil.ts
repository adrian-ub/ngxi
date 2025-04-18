import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNavaidMilitaryCivilIcon],svg[carbon-navaid-military-civil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 24a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6"></svg:path><svg:path fill="currentColor" d="M30 14h-2.18A12.01 12.01 0 0 0 18 4.18V2h-4v2.18A12.01 12.01 0 0 0 4.18 14H2v4h2.18A12.01 12.01 0 0 0 14 27.82V30h4v-2.18A12.01 12.01 0 0 0 27.82 18H30ZM16 26a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10"></svg:path>`,
})
export class CarbonNavaidMilitaryCivilIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
