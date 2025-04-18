import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddFilterFilledIcon],svg[ix-add-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 267.333L384 85.333H42.667l149.333 182v122h42.667zM426.666 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddFilterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
