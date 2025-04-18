import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCookingPotFillIcon],svg[ph-cooking-pot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m94.4 35.2a8 8 0 0 0-11.2-1.6L224 104V80a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v24L12.8 89.6a8 8 0 0 0-9.6 12.8L32 124v60a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-60l28.8-21.6a8 8 0 0 0 1.6-11.2"></svg:path>`,
})
export class PhCookingPotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
