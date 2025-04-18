import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPttEvStationPluzIcon],svg[arcticons-ptt-ev-station-pluz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.89 21.139h17.362l6.968 9.99c.376.538 1.022.94 1.656.94s1.28-.402 1.656-.94l6.968-9.99m-19.075 5.208H8.034c-1.958 0-3.534-2.2-3.534-4.93v-.556c0-2.732 1.576-4.93 3.534-4.93h16.391"></svg:path>`,
})
export class ArcticonsPttEvStationPluzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
