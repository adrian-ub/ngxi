import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsMigrateIcon],svg[dashicons-migrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h6V4H2v12.01h8V14H4zm2 2h6V5l6 5l-6 5v-3H6z"></svg:path>`,
})
export class DashiconsMigrateIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
