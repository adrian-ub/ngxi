import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlusMinusLightIcon],svg[ph-plus-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.24 60.24l-144 144a6 6 0 0 1-8.48-8.48l144-144a6 6 0 0 1 8.48 8.48M66 112a6 6 0 0 0 12 0V78h34a6 6 0 0 0 0-12H78V32a6 6 0 0 0-12 0v34H32a6 6 0 0 0 0 12h34Zm158 66h-80a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhPlusMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
