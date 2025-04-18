import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMeasuringInputIcon],svg[ix-measuring-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 426.669h426.666V256.003H42.667zm42.666-128h21.334v42.667h42.666v-42.667h21.334v64h42.666v-64h21.334v42.667h42.666v-42.667h21.334v64h42.666v-64h21.334v42.667h42.666v-42.667h21.334v84.373H85.333zm250.292-85.333c-7.377 12.753-21.166 21.333-36.958 21.333c-23.564 0-42.667-19.102-42.667-42.666c0-23.565 19.103-42.667 42.667-42.667c15.792 0 29.581 8.58 36.958 21.333h133.708v42.667zm-53.141-97.152l-30.17-30.848l-81.647 85.333h-128v42.667H192z" clip-rule="evenodd"></svg:path>`,
})
export class IxMeasuringInputIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
