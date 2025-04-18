import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableCellsIcon],svg[fa6-solid-table-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 64v64H64V96zm56 0h88v64h-88zm240 0v64h-88V96zM64 224h88v64H64zm232 0v64h-88v-64zm64 0h88v64h-88zM152 352v64H64v-64zm56 0h88v64h-88zm240 0v64h-88v-64z"></svg:path>`,
})
export class Fa6SolidTableCellsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
