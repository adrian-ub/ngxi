import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentToolbox20FilledIcon],svg[fluent-document-toolbox-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H13v-5a2 2 0 0 0-2-2h-1v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-1 .268V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM4 12v-1.5A1.5 1.5 0 0 1 5.5 9h2A1.5 1.5 0 0 1 9 10.5V12h1.5a1.5 1.5 0 0 1 1.5 1.5V15H9v-.5a.5.5 0 0 0-1 0v.5H5v-.5a.5.5 0 0 0-1 0v.5H1v-1.5A1.5 1.5 0 0 1 2.5 12zm1-1.5V12h3v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5M9 16h3v1.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 1 17.5V16h3v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentDocumentToolbox20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
