import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDatabaseLineIcon],svg[ri-database-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19V9H4v10zm0-12V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm2-2v14h7V5zM5 16h5v2H5zm9 0h5v2h-5zm0-3h5v2h-5zm0-3h5v2h-5zm-9 3h5v2H5z"></svg:path>`,
})
export class RiDatabaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
