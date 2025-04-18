import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEqualsIcon],svg[ph-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 104h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhEqualsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
