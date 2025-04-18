import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSaturationFilledIcon],svg[tdesign-saturation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.068 7.07L12 .07l-7.068 7a9.856 9.856 0 0 0 0 14.029c3.905 3.867 10.231 3.867 14.136 0a9.856 9.856 0 0 0 0-14.029M18 13.996a6 6 0 0 1-6 6v-12a6 6 0 0 1 6 6"></svg:path>`,
})
export class TdesignSaturationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
