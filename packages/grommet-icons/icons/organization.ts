import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsOrganizationIcon],svg[grommet-icons-organization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M20 3v20H4V3zM8.042 9h2V7h-2zM14 9h2V7h-2zm-5.958 6h2v-2h-2zm2 8h4v-4h-4zM14 15h2v-2h-2zM2 3h20V1H2z"></svg:path>`,
})
export class GrommetIconsOrganizationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
