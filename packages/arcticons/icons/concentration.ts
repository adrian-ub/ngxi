import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsConcentrationIcon],svg[arcticons-concentration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.841 26.485c4.698 0 8.508 3.81 8.508 8.507S28.54 43.5 23.841 43.5a8.508 8.508 0 0 1 0-17.015"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.04 31.278a9.538 9.538 0 1 1 15.818.323"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.914 22.71c-3.776-5.018-2.77-12.147 2.249-15.924C22.18 3.01 29.31 4.016 33.086 9.034a11.37 11.37 0 0 1 .054 13.604"></svg:path>`,
})
export class ArcticonsConcentrationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
