import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorUnorderedListIcon],svg[oui-editor-unordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1m0 4h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1m0 4h8a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1m-3-7a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 4a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 4a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class OuiEditorUnorderedListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
