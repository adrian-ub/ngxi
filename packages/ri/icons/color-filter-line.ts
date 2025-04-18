import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riColorFilterLineIcon],svg[ri-color-filter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a4 4 0 0 1 3.696 5.533a6 6 0 0 0-4.216 2.434A4 4 0 0 1 8 7a4 4 0 0 1 4-4m5.764 5.672a6 6 0 1 0-11.527 0A6 6 0 1 0 12 18.655a6 6 0 1 0 5.764-9.983m-4.61 8.262a6 6 0 0 0 0-4.867a4.001 4.001 0 1 1 0 4.867m-1.79-3.967a4.001 4.001 0 1 1-4.214-2.434a6 6 0 0 0 4.215 2.434"></svg:path>`,
})
export class RiColorFilterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
