import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentPrint48FilledIcon],svg[fluent-document-print-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4v11.25A3.75 3.75 0 0 0 27.75 19H40v21a3 3 0 0 1-3 3H25.646A4 4 0 0 0 27 40v-7a5 5 0 0 0-4.084-4.916A5 5 0 0 0 18 24h-8c-.711 0-1.388.148-2 .416V7a3 3 0 0 1 3-3zm2.5.464V15.25c0 .69.56 1.25 1.25 1.25h11.712zM10 26a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3h-1v-1a3 3 0 0 0-3-3zm9 4H9v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-9 8h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentDocumentPrint48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
