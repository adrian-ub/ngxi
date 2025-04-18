import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDatabaseIcon],svg[jam-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm0-2a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3m0-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-3 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamDatabaseIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
