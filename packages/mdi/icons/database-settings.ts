import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseSettingsIcon],svg[mdi-database-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM12 3c4.42 0 8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4s3.58-4 8-4M4 9c0 2.21 3.58 4 8 4s8-1.79 8-4v3c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5c0 2.21 3.58 4 8 4s8-1.79 8-4v3c0 1.19-1.05 2.27-2.71 3H6.71C5.05 19.27 4 18.19 4 17z"></svg:path>`,
})
export class MdiDatabaseSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
