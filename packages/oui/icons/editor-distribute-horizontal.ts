import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorDistributeHorizontalIcon],svg[oui-editor-distribute-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 1 1-1 0v-13a.5.5 0 0 1 .5-.5m13 0a.5.5 0 0 1 .5.5v13a.5.5 0 1 1-1 0v-13a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class OuiEditorDistributeHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
