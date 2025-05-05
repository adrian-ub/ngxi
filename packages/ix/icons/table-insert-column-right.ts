import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTableInsertColumnRightIcon],svg[ix-table-insert-column-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.667v42.666h-64v64h-42.667v-64h-64v-42.666h64v-64H192v64zm21.333-64h85.334v426.666H149.333V256H192v170.667h128V85.333h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableInsertColumnRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
