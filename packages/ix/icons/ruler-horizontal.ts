import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRulerHorizontalIcon],svg[ix-ruler-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.667 170.665h426.666v170.667H42.667zm42.666 42.667v85.333h341.334v-85.333H384v42.667h-42.667v-42.667h-64v42.667h-42.666v-42.667h-64v42.667H128v-42.667z"></svg:path>`,
})
export class IxRulerHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
