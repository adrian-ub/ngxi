import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGruppoSanDonatoIcon],svg[arcticons-gruppo-san-donato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.833 24.019l.01 20.274a21.5 21.5 0 0 1 .12-40.59m14.204 20.316V3.749a21.5 21.5 0 0 1-.022 40.548"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 44.289c6.18-6.18 8.512-11.759 0-20.27S17.819 9.93 24 3.749"></svg:path>`,
})
export class ArcticonsGruppoSanDonatoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
