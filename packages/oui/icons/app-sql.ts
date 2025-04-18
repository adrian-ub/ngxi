import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppSqlIcon],svg[oui-app-sql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6h9v2h-9zM5 6h9v2H5zm0 6h9v2H5zm13 0h9v2h-9zM5 18h9v2H5zm13 0h9v2h-9zm0 6h9v2h-9zM5 24h9v2H5z" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M29 32H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3M3 2a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></svg:path>`,
})
export class OuiAppSqlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
