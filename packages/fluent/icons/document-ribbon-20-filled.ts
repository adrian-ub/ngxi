import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentRibbon20FilledIcon],svg[fluent-document-ribbon-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H8v-2.355a4 4 0 0 0-4-6.52V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM8 13a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-1 3.464A4 4 0 0 1 5 17a4 4 0 0 1-2-.535v2.286a.25.25 0 0 0 .378.215L5 17.999l1.622.966A.25.25 0 0 0 7 18.75z"></svg:path>`,
})
export class FluentDocumentRibbon20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
