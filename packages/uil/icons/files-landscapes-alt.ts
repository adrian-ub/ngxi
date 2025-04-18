import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilFilesLandscapesAltIcon],svg[uil-files-landscapes-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19H6a3 3 0 0 1-3-3V8a1 1 0 0 0-2 0v8a5 5 0 0 0 5 5h12a1 1 0 0 0 0-2m-4-8h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m9-1.06a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.09a.9.9 0 0 0-.33-.11H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3zm-6-3.53L19.59 9H18a1 1 0 0 1-1-1ZM21 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7v3a3 3 0 0 0 3 3h3ZM10 9h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class UilFilesLandscapesAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
