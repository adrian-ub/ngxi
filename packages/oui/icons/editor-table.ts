import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiEditorTableIcon],svg[oui-editor-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3v2H2V3v10h12zM2 2h12c.552 0 1 .413 1 .923v10.154c0 .51-.448.923-1 .923H2c-.552 0-1-.413-1-.923V2.923C1 2.413 1.448 2 2 2m0 5h12v1H2zm0 3h12v1H2z"></svg:path>`,
})
export class OuiEditorTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
