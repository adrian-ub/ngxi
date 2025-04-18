import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEditorGridIcon],svg[ix-editor-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.667 64v64h64V64h42.666v64h64V64H384v64h64v42.667h-64v64h64v42.666h-64v64h64V384h-64v64h-42.667v-64h-64v64h-42.666v-64h-64v64H128v-64H64v-42.667h64v-64H64v-42.666h64v-64H64V128h64V64zm64 213.333h-64v64h64zm106.666 0h-64v64h64zM234.667 170.667h-64v64h64zm106.666 0h-64v64h64z"></svg:path>`,
})
export class IxEditorGridIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
