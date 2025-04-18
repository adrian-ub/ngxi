import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGenderMaleIcon],svg[carbon-gender-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v2h6.586l-7.688 7.689a8.028 8.028 0 1 0 1.414 1.414L26 7.414V14h2V4Zm-6 22a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6"></svg:path>`,
})
export class CarbonGenderMaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
