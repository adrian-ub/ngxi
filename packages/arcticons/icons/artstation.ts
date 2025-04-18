import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArtstationIcon],svg[arcticons-artstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.066 11.697l8.307 14.762H8.549zm25.151 21.099l-3.795 6.575L19.989 6.63h7.126c.757 0 1.456.403 1.834 1.058L42.217 30.68a2.12 2.12 0 0 1 0 2.116m-9.568 6.575h-21.52a2.12 2.12 0 0 1-1.834-1.058L5.5 31.738h22.848z"></svg:path>`,
})
export class ArcticonsArtstationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
