import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGraphicEqIcon],svg[zmdi-graphic-eq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 344V88h43v256zm86 85V3h42v426zM0 259v-86h43v86zm256 85V88h43v256zm85-171h43v86h-43z"></svg:path>`,
})
export class ZmdiGraphicEqIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
