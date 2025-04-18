import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentOnePageMultiple20FilledIcon],svg[fluent-document-one-page-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4q0-.103.01-.204A2 2 0 0 1 6 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm7.59 1.992A.5.5 0 0 0 11.5 5h-4l-.09.008A.5.5 0 0 0 7.5 6h4zm0 3.5a.5.5 0 0 0-.09-.992h-4l-.09.008a.5.5 0 0 0 .09.992h4zm0 3.5A.5.5 0 0 0 11.5 12h-4l-.09.008A.5.5 0 0 0 7.5 13h4zM17 14.06V6a2 2 0 0 0-1-1.732V14a3 3 0 0 1-3 3H6a1 1 0 0 0 1 1h6.06A3.94 3.94 0 0 0 17 14.06"></svg:path>`,
})
export class FluentDocumentOnePageMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
