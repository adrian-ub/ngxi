import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexThinIcon],svg[ph-gender-intersex-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-40a4 4 0 0 0 0 8h30.34l-34.79 34.79A60 60 0 1 0 116 171.85V196H88a4 4 0 0 0 0 8h28v28a4 4 0 0 0 8 0v-28h28a4 4 0 0 0 0-8h-28v-24.15A59.94 59.94 0 0 0 168.68 77L204 41.66V72a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-88 136a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhGenderIntersexThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
