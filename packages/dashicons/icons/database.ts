import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsDatabaseIcon],svg[dashicons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6c3.9 0 7-.9 7-2s-3.1-2-7-2s-7 .9-7 2s3.1 2 7 2m0 9c-3.9 0-7-.9-7-2v3c0 1.1 3.1 2 7 2s7-.9 7-2v-3c0 1.1-3.1 2-7 2m0-4c-3.9 0-7-.9-7-2v3c0 1.1 3.1 2 7 2s7-.9 7-2V9c0 1.1-3.1 2-7 2m0-4c-3.9 0-7-.9-7-2v3c0 1.1 3.1 2 7 2s7-.9 7-2V5c0 1.1-3.1 2-7 2"></svg:path>`,
})
export class DashiconsDatabaseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
