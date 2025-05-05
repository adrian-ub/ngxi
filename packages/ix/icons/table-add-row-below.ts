import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTableAddRowBelowIcon],svg[ix-table-add-row-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 277.333h-42.666v-64h-64v-42.666h64v-64h42.666v64h64v42.666h-64zm-192-64H128v-42.666H42.667V384h426.666V170.667H384v42.666h42.667v128H85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableAddRowBelowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
