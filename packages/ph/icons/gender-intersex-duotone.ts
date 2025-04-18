import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexDuotoneIcon],svg[ph-gender-intersex-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 112a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M208 24h-40a8 8 0 0 0 0 16h20.69l-25.15 25.15A64 64 0 1 0 112 175.48V192H88a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16h-24v-16.52a63.92 63.92 0 0 0 45.84-98L200 51.31V72a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-88 136a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48"></svg:path></svg:g>`,
})
export class PhGenderIntersexDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
