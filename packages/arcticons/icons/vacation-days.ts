import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVacationDaysIcon],svg[arcticons-vacation-days-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.287 42.03a21.54 21.54 0 0 1 30.167-30.698m0 0L11.287 42.031"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.662 33.508C2.642 10.55 12.786 2.656 33.38 19.548m-3.728 9.834L42.5 42.2"></svg:path>`,
})
export class ArcticonsVacationDaysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
