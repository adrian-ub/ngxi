import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phIntersectionFillIcon],svg[ph-intersection-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 144a8 8 0 0 1-16 0v-56a40 40 0 0 0-80 0v56a8 8 0 0 1-16 0v-56a56 56 0 0 1 112 0Z"></svg:path>`,
})
export class PhIntersectionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
