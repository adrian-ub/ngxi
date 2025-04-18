import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFolder20RegularIcon],svg[fluent-document-folder-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8h1V4.268A2 2 0 0 1 16 6v6.268A2 2 0 0 1 17 14v1.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 15.5V9a2 2 0 0 1 1-1.732V4a2 2 0 0 1 2-2zM5 7h1.879a2 2 0 0 1 1.414.586l4.121 4.121a1 1 0 0 0 .586.286V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1zM4 9v6.5A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.5-1.5V14a1 1 0 0 0-1-1h-1.879a2 2 0 0 1-1.414-.586L7.586 8.293A1 1 0 0 0 6.879 8H5a1 1 0 0 0-1 1"></svg:path>`,
})
export class FluentDocumentFolder20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
