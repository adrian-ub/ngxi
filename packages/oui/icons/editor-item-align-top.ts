import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorItemAlignTopIcon],svg[oui-editor-item-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2M1.5 1h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1"></svg:path>`,
})
export class OuiEditorItemAlignTopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
