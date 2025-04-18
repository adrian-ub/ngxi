import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddCircleSmallIcon],svg[ix-add-circle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 256c0-94.257 76.41-170.667 170.667-170.667S426.667 161.743 426.667 256S350.257 426.667 256 426.667S85.333 350.257 85.333 256M128 256c0-70.692 57.308-128 128-128s128 57.308 128 128s-57.308 128-128 128s-128-57.308-128-128m106.667-21.333v-64h42.666v64h64v42.666h-64v64h-42.666v-64h-64v-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddCircleSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
