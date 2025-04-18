import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewDashboardVariantOutlineIcon],svg[mdi-view-dashboard-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v14h20V5zm18 7h-4V7h4zm-6-2h-4V7h4zm-4 2h4v5h-4zM4 7h4v10H4zm12 10v-3h4v3z"></svg:path>`,
})
export class MdiViewDashboardVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
