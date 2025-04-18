import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleLightIcon],svg[ph-gender-male-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 34h-48a6 6 0 0 0 0 12h33.52l-46.8 46.79a78 78 0 1 0 4.42 114.4a78.11 78.11 0 0 0 4.07-105.91L210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-65.34 164.7a66 66 0 1 1 0-93.36a66.1 66.1 0 0 1 0 93.36"></svg:path>`,
})
export class PhGenderMaleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
