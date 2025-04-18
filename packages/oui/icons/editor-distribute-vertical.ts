import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorDistributeVerticalIcon],svg[oui-editor-distribute-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M1.5 1h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1m0 13h13a.5.5 0 1 1 0 1h-13a.5.5 0 1 1 0-1"></svg:path>`,
})
export class OuiEditorDistributeVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
