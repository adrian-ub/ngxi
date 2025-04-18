import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftUpBoldIcon],svg[solar-arrow-left-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.53 17.47a.75.75 0 1 1-1.06 1.06l-6.97-6.97l-3.97 3.97A.75.75 0 0 1 5.25 15V6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 .53 1.28l-3.97 3.97z"></svg:path>`,
})
export class SolarArrowLeftUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
