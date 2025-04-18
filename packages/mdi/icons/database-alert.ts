import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseAlertIcon],svg[mdi-database-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7c0 2.21-3.58 4-8 4S2 9.21 2 7s3.58-4 8-4s8 1.79 8 4m-8 11c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4m0-5c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4m10 4h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiDatabaseAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
