import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppDashboardIcon],svg[oui-app-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 9H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3M3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></svg:path><svg:path fill="currentColor" d="M12 20H3a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3m-9-7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M12 31H3a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3m-9-7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"></svg:path><svg:path fill="currentColor" d="M29 31h-9a3 3 0 0 1-3-3V14a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3m-9-18a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1z" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiAppDashboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
