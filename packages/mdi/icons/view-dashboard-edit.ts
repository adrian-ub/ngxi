import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewDashboardEditIcon],svg[mdi-view-dashboard-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V23h2.1l6.1-6.1zM21 9h-8V3h8zm-8 9.06V11h8v.1c-.76 0-1.43.4-1.81.79zM11 13H3V3h8zm0 8H3v-6h8z"></svg:path>`,
})
export class MdiViewDashboardEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
