import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsLightIcon],svg[ph-text-columns-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 64a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6m-6 34H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m32-108h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12m72 28h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextColumnsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
