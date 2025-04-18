import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasOrganizationIcon],svg[pajamas-organization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 2.25a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M4.516 8a3 3 0 1 0 4.932 2.81a3 3 0 1 0 0-5.62A3 3 0 1 0 4.516 8M6.5 7.25a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4 2.25a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class PajamasOrganizationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
