import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightViewDashboardIcon],svg[mdi-light-view-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4h8v6h-8zm0 17V11h8v10zm-9 0v-6h8v6zm0-7V4h8v10zm1-9v8h6V5zm9 0v4h6V5zm0 7v8h6v-8zm-9 4v4h6v-4z"></svg:path>`,
})
export class MdiLightViewDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
