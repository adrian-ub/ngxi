import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandTerraformIcon],svg[tabler-brand-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15.5L3.524 9.284A1 1 0 0 1 3 8.404V4.35a1.35 1.35 0 0 1 2.03-1.166L15 9v10.65a1.35 1.35 0 0 1-2.03 1.166l-3.474-2.027A1 1 0 0 1 9 17.926V6m6 9.5l5.504-3.21a1 1 0 0 0 .496-.864V7.85a1.35 1.35 0 0 0-2.03-1.166L15 9"></svg:path>`,
})
export class TablerBrandTerraformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
