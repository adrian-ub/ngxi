import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFolder16RegularIcon],svg[fluent-document-folder-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10.085a1.5 1.5 0 0 1 1 1.415v.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.5a1.5 1.5 0 0 1 1-1.415V3.5A1.5 1.5 0 0 1 4.5 2h5A1.5 1.5 0 0 1 11 3.5V10h1V4.085A1.5 1.5 0 0 1 13 5.5zm-3-.792V3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V5h1.086a1.5 1.5 0 0 1 1.06.44zM3 6.5V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.5a.5.5 0 0 0-.5-.5h-1.586a1.5 1.5 0 0 1-1.06-.44L5.439 6.147A.5.5 0 0 0 5.086 6H3.5a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentDocumentFolder16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
