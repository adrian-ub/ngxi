import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDatabaseFIcon],svg[jam-database-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3m5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class JamDatabaseFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
