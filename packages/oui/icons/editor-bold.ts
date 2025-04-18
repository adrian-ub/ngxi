import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorBoldIcon],svg[oui-editor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.193 13H4V3h4.151c1.816 0 2.987.977 2.987 2.495c0 1.074-.797 2.01-1.823 2.176v.055c1.359.132 2.308 1.11 2.308 2.433c0 1.76-1.296 2.841-3.43 2.841M5.788 4.393v2.82h1.635c1.248 0 1.948-.526 1.948-1.455c0-.873-.603-1.365-1.67-1.365zm0 7.214h1.996c1.316 0 2.016-.547 2.016-1.573c0-1.019-.72-1.552-2.092-1.552h-1.92z"></svg:path>`,
})
export class OuiEditorBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
