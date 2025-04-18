import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiDocumentEditIcon],svg[oui-document-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.505 8.995l6.453-6.44l-1.5-1.5l-6.453 6.44zM12.968.19c.258-.238.657-.26.91 0l1.928 1.929a.64.64 0 0 1 0 .909l-6.78 6.784A.64.64 0 0 1 8.57 10H6.643A.643.643 0 0 1 6 9.357V7.43c0-.17.067-.335.188-.455zM4.5 13a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1zm4-12a.5.5 0 0 1 0 1H2v13h12V7.5a.5.5 0 1 1 1 0V15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"></svg:path>`,
})
export class OuiDocumentEditIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
