import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentPerson16RegularIcon],svg[fluent-document-person-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1a2 2 0 0 0-2 2v2.401a3 3 0 0 1 1-.36V3a1 1 0 0 1 1-1h3v2.5A1.5 1.5 0 0 0 9.5 6H12v7a1 1 0 0 1-1 1H8.632a3.3 3.3 0 0 1-.804.985L7.81 15H11a2 2 0 0 0 2-2V5.414a1.5 1.5 0 0 0-.44-1.06L9.647 1.439A1.5 1.5 0 0 0 8.586 1zm6.793 4H9.5a.5.5 0 0 1-.5-.5V2.207zM6.5 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 12.5C8 13.745 7 15 4.5 15S1 13.75 1 12.5A1.5 1.5 0 0 1 2.5 11h4A1.5 1.5 0 0 1 8 12.5"></svg:path>`,
})
export class FluentDocumentPerson16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
