import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidcheckAltIcon],svg[arcticons-covidcheck-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.642 7.252h8.506v8.506m0 17.012v8.505h-8.506m-17.012 0H7.124V32.77m10.936-8.506l4.496 4.86l9.478-9.721M5.589 5.308c2.705-1.371 9.448-1.383 12.15 0c.012 4.266-.006 9.925-6.075 12.759c-6.05-2.85-6.06-8.49-6.075-12.76m6.075 1.581v7.29m-3.645-3.767h7.29"></svg:path>`,
})
export class ArcticonsCovidcheckAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
