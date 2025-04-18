import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentLink24FilledIcon],svg[fluent-document-link-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-5a5 5 0 0 0-4-8H4V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM5.75 15.75A.75.75 0 0 0 5 15l-.2.005A4 4 0 0 0 5 23l.102-.007A.75.75 0 0 0 5 21.5l-.164-.005A2.5 2.5 0 0 1 5 16.5l.102-.007a.75.75 0 0 0 .648-.743M13 19a4 4 0 0 0-4-4l-.102.007A.75.75 0 0 0 9 16.5l.164.005A2.5 2.5 0 0 1 9 21.5l-.102.007A.75.75 0 0 0 9 23l.2-.005A4 4 0 0 0 13 19m-4.25-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007a.75.75 0 0 0-.102-1.493"></svg:path>`,
})
export class FluentDocumentLink24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
