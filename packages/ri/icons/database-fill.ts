import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDatabaseFillIcon],svg[ri-database-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-6 9v2h5v-2zm9 0v2h5v-2zm0-3v2h5v-2zm0-3v2h5v-2zm-9 3v2h5v-2z"></svg:path>`,
})
export class RiDatabaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
