import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTextCircleRectangleIcon],svg[ix-text-circle-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 256v192H256V256zm-42.666 42.667H298.667v106.667h106.667zM255.947 128v64h-31.991l-10.665-21.333h-42.656V320l42.656 10.667v32H85.323v-32L127.979 320V170.667H85.323L74.659 192H42.667v-64zM384 42.667c47.128 0 85.334 38.205 85.334 85.333S431.128 213.334 384 213.334S298.667 175.129 298.667 128c0-47.128 38.206-85.333 85.333-85.333m0 42.667c-23.563 0-42.666 19.102-42.666 42.666s19.103 42.667 42.666 42.667c23.564 0 42.667-19.103 42.667-42.667S407.564 85.334 384 85.334"></svg:path>`,
})
export class IxTextCircleRectangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
