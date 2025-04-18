import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTheAthleticIcon],svg[arcticons-the-athletic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.3 6.5h12l12.7 35m4.5 0h-12m-15 0h-12M34 29H14m6.3-18.5L9 41.5"></svg:path>`,
})
export class ArcticonsTheAthleticIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
