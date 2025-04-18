import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberEightLightIcon],svg[ph-number-eight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M151.62 119.45a46 46 0 1 0-47.24 0a54 54 0 1 0 47.24 0M94 80a34 34 0 1 1 34 34a34 34 0 0 1-34-34m34 130a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhNumberEightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
