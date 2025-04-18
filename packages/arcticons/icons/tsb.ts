import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTsbIcon],svg[arcticons-tsb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 36.55c7.012-9.3 13.742-10.531 20.5-12.55M24 36.55C16.988 27.25 10.258 26.019 3.5 24M24 11.45c7.012 9.3 13.742 10.531 20.5 12.55M24 11.45C16.988 20.75 10.258 21.981 3.5 24m10.74 0h19.52"></svg:path>`,
})
export class ArcticonsTsbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
