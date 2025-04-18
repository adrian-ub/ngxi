import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phIntersectionLightIcon],svg[ph-intersection-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 120v80a6 6 0 0 1-12 0v-80a66 66 0 0 0-132 0v80a6 6 0 0 1-12 0v-80a78 78 0 0 1 156 0"></svg:path>`,
})
export class PhIntersectionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
