import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTableInsertRowAboveIcon],svg[ix-table-insert-row-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 234.667v-85.334h426.666v213.334H256V320h170.667V192H85.333v42.667zm64 21.333h42.666v64h64v42.667h-64v64h-42.666v-64h-64V320h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableInsertRowAboveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
