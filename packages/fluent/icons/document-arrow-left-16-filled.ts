import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentArrowLeft16FilledIcon],svg[fluent-document-arrow-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v3.5A1.5 1.5 0 0 0 10.5 6H14v7.5a1.5 1.5 0 0 1-1.5 1.5H8.663A5.5 5.5 0 0 0 4 5.207V2.5A1.5 1.5 0 0 1 5.5 1zm1 .25V4.5a.5.5 0 0 0 .5.5h3.25zm0 9.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-6.853-.354l-.003.003a.5.5 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L4.707 11H7.5a.5.5 0 0 0 0-1H4.707l1.147-1.146a.5.5 0 1 0-.708-.708z"></svg:path>`,
})
export class FluentDocumentArrowLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
