import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEditorGridLinesIcon],svg[ix-editor-grid-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zM384 213.333h-64v85.334h64V320h-64v64h-21.333v-64h-85.334v64H192v-64h-64v-21.333h64v-85.334h-64V192h64v-64h21.333v64h85.334v-64H320v64h64zm-170.667 0h85.334v85.334h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditorGridLinesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
