import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddCircleSmallFilledIcon],svg[ix-add-circle-small-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333c-94.257 0-170.667 76.41-170.667 170.667S161.743 426.667 256 426.667S426.667 350.257 426.667 256S350.257 85.333 256 85.333m-21.333 149.334v-64h42.666v64h64v42.666h-64v64h-42.666v-64h-64v-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddCircleSmallFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
