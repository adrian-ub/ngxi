import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentPerson20FilledIcon],svg[fluent-document-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H8.632c.25-.473.368-.988.368-1.5a2.5 2.5 0 0 0-2.273-2.49A3 3 0 0 0 4 9.041V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM6.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 16.5C8 17.745 7 19 4.5 19S1 17.75 1 16.5A1.5 1.5 0 0 1 2.5 15h4A1.5 1.5 0 0 1 8 16.5"></svg:path>`,
})
export class FluentDocumentPerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
