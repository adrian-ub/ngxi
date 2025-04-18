import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMoveLayerDownIcon],svg[ix-move-layer-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m298.667 255.997l42.667 21.324v47.68L256 282.344l-117.952 58.987L256 400.296l13.292-6.667l31.821 31.821L256 447.997L42.667 341.331l170.666-85.334L256 277.331zM256 42.664l213.333 106.667L256 255.997L42.667 149.331zM454.247 347.58l-48.914 48.914V277.331h-42.667v119.164l-48.915-48.916l-30.17 30.169l100.418 100.419l100.418-100.419z" clip-rule="evenodd"></svg:path>`,
})
export class IxMoveLayerDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
