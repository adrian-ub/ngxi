import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceGasStationIcon],svg[guidance-gas-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 21V3.5l.088-.059a11.56 11.56 0 0 1 12.824 0l.088.059V21M6 22.5h18M0 4.5h4.5v8a4 4 0 0 0 4 4m-7-12a3 3 0 0 0 3 3m14 2h-7V5.043a11.56 11.56 0 0 1 7 0z"></svg:path>`,
})
export class GuidanceGasStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
