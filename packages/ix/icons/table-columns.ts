import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTableColumnsIcon],svg[ix-table-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 213.334h64v192H64zm0-106.667h64v64H64zm213.333 106.667h64v192h-64zm0-106.667h64v64h-64zM170.667 213.334h64v192h-64zm0-106.667h64v64h-64zM384 213.334h64v192h-64zm0-106.667h64v64h-64z"></svg:path>`,
})
export class IxTableColumnsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
