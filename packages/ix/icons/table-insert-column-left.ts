import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTableInsertColumnLeftIcon],svg[ix-table-insert-column-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 469.333V42.667h85.334v42.666H192v341.334h128V256h42.667v213.333zm277.334-362.666v42.666h-64v64H320v-64h-64v-42.666h64v-64h42.667v64z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableInsertColumnLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
