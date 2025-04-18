import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorRedoIcon],svg[oui-editor-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6H5C3.057 6 2 7.057 2 9s1.057 3 3 3h1.5v-1H5c-1.39 0-2-.61-2-2s.61-2 2-2h5v3l3.5-3.5L10 3z"></svg:path>`,
})
export class OuiEditorRedoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
