import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTableInsertRowBelowIcon],svg[ix-table-insert-row-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 85.333h42.666v64h64V192h-64v64h-42.666v-64h-64v-42.667h64zm149.333 64h213.333v213.334H42.667v-85.334h42.666V320h341.334V192H256z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableInsertRowBelowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
