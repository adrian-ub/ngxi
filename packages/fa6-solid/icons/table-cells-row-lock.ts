import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTableCellsRowLockIcon],svg[fa6-solid-table-cells-row-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v65.1c-37.8 5.4-69.4 29.6-85.2 62.9H360v64h56v8.6c-19.1 11.1-32 31.7-32 55.4h-24v64h24v64H64c-35.3 0-64-28.7-64-64zm64 128v64h88v-64zm232 0h-88v64h88zM152 352H64v64h88zm56 0v64h88v-64zm320-112c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"></svg:path>`,
})
export class Fa6SolidTableCellsRowLockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
