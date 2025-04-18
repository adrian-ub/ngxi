import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHashStraightFillIcon],svg[ph-hash-straight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 112h32v32h-32Zm112-64v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-64 96v-32h32a8 8 0 0 0 0-16h-32V64a8 8 0 0 0-16 0v32h-32V64a8 8 0 0 0-16 0v32H64a8 8 0 0 0 0 16h32v32H64a8 8 0 0 0 0 16h32v32a8 8 0 0 0 16 0v-32h32v32a8 8 0 0 0 16 0v-32h32a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhHashStraightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
