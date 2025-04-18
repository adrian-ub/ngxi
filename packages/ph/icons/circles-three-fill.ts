import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeFillIcon],svg[ph-circles-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 120a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44m60 8a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m-120 0a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44"></svg:path>`,
})
export class PhCirclesThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
