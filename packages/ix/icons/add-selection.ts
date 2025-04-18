import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddSelectionIcon],svg[ix-add-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 106.667h-21.333V128H64V64h64zm-64 64v64h42.667v-64zm0 170.666v-64h42.667v64zm341.333-170.666v64H448v-64zM170.667 64h64v42.667h-64zm170.666 0h-64v42.667h64zM170.667 405.333h64V448h-64zm-64 0V384H64v64h64v-42.667zm298.666-298.666V128H448V64h-64v42.667zM426.667 384v-64H384v64h-64v42.667h64v64h42.667v-64h64V384z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddSelectionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
