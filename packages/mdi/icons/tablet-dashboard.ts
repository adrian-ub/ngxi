import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTabletDashboardIcon],svg[mdi-tablet-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18H5V6h14m2-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M7 8h6v5H7zm7 0h3v2h-3zm3 3v5h-3v-5zM7 14h6v2H7z"></svg:path>`,
})
export class MdiTabletDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
