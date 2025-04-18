import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreeDuotoneIcon],svg[ph-circles-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 112a36 36 0 1 1 36-36a36 36 0 0 1-36 36m60 24a36 36 0 1 0 36 36a36 36 0 0 0-36-36m-120 0a36 36 0 1 0 36 36a36 36 0 0 0-36-36" opacity=".2"></svg:path><svg:path d="M172 76a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m60 24a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28M68 128a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path></svg:g>`,
})
export class PhCirclesThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
