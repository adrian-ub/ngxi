import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsDocumentCheck20SolidIcon],svg[heroicons-document-check-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5zm10.857 5.691a.75.75 0 0 0-1.214-.882l-3.483 4.79l-1.88-1.88a.75.75 0 0 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsDocumentCheck20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
