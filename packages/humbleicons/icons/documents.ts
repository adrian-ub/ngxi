import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsDocumentsIcon],svg[humbleicons-documents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M13 3v7h7M6 7H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1M8 4v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.389a1 1 0 0 0-.263-.676l-4.94-5.389A1 1 0 0 0 14.06 3H9a1 1 0 0 0-1 1Z"></svg:path>`,
})
export class HumbleiconsDocumentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
