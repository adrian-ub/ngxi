import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMoveLayerUpIcon],svg[ix-move-layer-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m298.667 267.302l34.68 21.676l-79.933 79.933l60.34 60.34l27.581-27.544v23.463L256 459.302L42.667 352.635l170.666-85.333L256 288.635zM256 53.969l213.333 106.666L256 267.302L42.667 160.635zm0 47.68l-117.952 58.986L256 219.601l117.931-58.966zm228.419 267.269l-30.169 30.17l-48.916-48.916v119.164h-42.667V350.174l-48.914 48.914l-30.17-30.17L384.001 268.5z" clip-rule="evenodd"></svg:path>`,
})
export class IxMoveLayerUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
