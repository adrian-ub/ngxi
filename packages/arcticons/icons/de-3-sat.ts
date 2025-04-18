import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDe3SatIcon],svg[arcticons-de-3-sat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.43 10.538h15.337L35.805 4.5H8.39z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.803 20.49L35.805 4.5l3.804 3.804l-16.001 15.99z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 36.237l5.241-4.432c8.043 11.678 24.953 1.843 12.764-10.403l4.83-4.83c16.4 16.67-5.3 38.493-22.835 19.666Z"></svg:path>`,
})
export class ArcticonsDe3SatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
