import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderMultiplePlusIcon],svg[mdi-folder-multiple-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V6H0v14c0 1.1.9 2 2 2h18v-2zM22 4h-8l-2-2H6c-.4 0-.8.1-1.1.3l-.6.6c-.2.3-.3.7-.3 1.1v12c0 .4.1.8.3 1.1c.1.1.2.2.2.3q.75.6 1.5.6h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 8h-3v3h-2v-3h-3v-2h3V7h2v3h3z"></svg:path>`,
})
export class MdiFolderMultiplePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
