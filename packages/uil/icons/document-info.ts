import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilDocumentInfoIcon],svg[uil-document-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m.38-2.92a1 1 0 0 0-.58-.08l-.18.06l-.18.09l-.15.12A1 1 0 0 0 11 12a1 1 0 0 0 .29.71a1 1 0 0 0 .33.21a.84.84 0 0 0 .38.08a1 1 0 0 0 .71-.29A1 1 0 0 0 13 12a1 1 0 0 0-.29-.71a1.2 1.2 0 0 0-.33-.21M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.1a1.1 1.1 0 0 0-.31-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3Z"></svg:path>`,
})
export class UilDocumentInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
