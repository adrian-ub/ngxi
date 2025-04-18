import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentArrowDown20FilledIcon],svg[fluent-document-arrow-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H9.743A5.5 5.5 0 0 0 4 9.207V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM5.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-2.354-4.146a.5.5 0 0 1 .708-.708L5 15.293V12.5a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.351.146h-.006a.5.5 0 0 1-.348-.144l-.003-.003z"></svg:path>`,
})
export class FluentDocumentArrowDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
