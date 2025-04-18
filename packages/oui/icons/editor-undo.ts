import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorUndoIcon],svg[oui-editor-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 6h5c1.943 0 3 1.057 3 3s-1.057 3-3 3H9v-1h1.5c1.39 0 2-.61 2-2s-.61-2-2-2h-5v3L2 6.5L5.5 3z"></svg:path>`,
})
export class OuiEditorUndoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
