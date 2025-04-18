import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddFilterIcon],svg[ix-add-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 267.333v122h42.667v-122L384 85.333H42.667zM293.781 128H132.864l80.469 98.048zm132.885 192v64h64v42.667h-64v64H384v-64h-64V384h64v-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
