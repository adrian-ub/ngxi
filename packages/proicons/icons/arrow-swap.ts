import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowSwapIcon],svg[proicons-arrow-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.618 12.249l-3.814 3.814c-.293.293-.44.677-.44 1.06M9.619 22l-3.814-3.814a1.5 1.5 0 0 1-.44-1.061m13.395 0H5.365m-.124-9.751h13.394m-4.253-4.875l3.814 3.814c.293.293.44.677.44 1.06m-4.254 4.876l3.814-3.814c.293-.293.44-.677.44-1.061"></svg:path>`,
})
export class ProiconsArrowSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
