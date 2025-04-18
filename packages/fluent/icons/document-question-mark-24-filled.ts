import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentQuestionMark24FilledIcon],svg[fluent-document-question-mark-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM1 17.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 0 0-11 0m4.75 3.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M4.5 16a2 2 0 1 1 4 0c0 .73-.212 1.14-.754 1.708l-.264.27l-.116.124C7.083 18.422 7 18.63 7 19a.5.5 0 0 1-1 0c0-.73.212-1.14.754-1.708l.264-.27l.116-.124c.283-.319.366-.527.366-.898a1 1 0 1 0-2 0a.5.5 0 0 1-1 0"></svg:path>`,
})
export class FluentDocumentQuestionMark24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
