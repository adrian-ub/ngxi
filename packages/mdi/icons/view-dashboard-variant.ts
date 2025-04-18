import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewDashboardVariantIcon],svg[mdi-view-dashboard-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v14h6V5zm7 0v5h6V5zm7 0v9h6V5zm-7 6v8h6v-8zm7 4v4h6v-4z"></svg:path>`,
})
export class MdiViewDashboardVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
