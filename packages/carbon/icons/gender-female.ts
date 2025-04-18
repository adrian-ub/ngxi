import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGenderFemaleIcon],svg[carbon-gender-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19.93a8 8 0 1 0-2 0V22h-5v2h5v4h2v-4h5v-2h-5ZM10 12a6 6 0 1 1 6 6a6.007 6.007 0 0 1-6-6"></svg:path>`,
})
export class CarbonGenderFemaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
