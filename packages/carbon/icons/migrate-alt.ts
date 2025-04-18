import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMigrateAltIcon],svg[carbon-migrate-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H12v-6h-2v6H4v-9h16.172l-3.586 3.586L18 22l6-6l-6-6l-1.414 1.414L20.172 15H4V6h6v6h2V6h16Z"></svg:path>`,
})
export class CarbonMigrateAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
