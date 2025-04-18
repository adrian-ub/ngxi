import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterDuotoneIcon],svg[ph-gender-neuter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 104a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M208 104a80 80 0 1 0-88 79.6V232a8 8 0 0 0 16 0v-48.4a80.11 80.11 0 0 0 72-79.6m-80 64a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path></svg:g>`,
})
export class PhGenderNeuterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
