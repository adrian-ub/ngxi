import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorItalicIcon],svg[oui-editor-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.16 12H9.5a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h1.639l1.7-8H7.5a.5.5 0 0 1 0-1h4a.5.5 0 1 1 0 1H9.861z"></svg:path>`,
})
export class OuiEditorItalicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
