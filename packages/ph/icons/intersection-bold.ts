import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phIntersectionBoldIcon],svg[ph-intersection-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 120v80a12 12 0 0 1-24 0v-80a60 60 0 0 0-120 0v80a12 12 0 0 1-24 0v-80a84 84 0 0 1 168 0"></svg:path>`,
})
export class PhIntersectionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
