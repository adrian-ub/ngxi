import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteToggleHeaderCellOutlineIcon],svg[flowbite-toggle-header-cell-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3a1 1 0 0 0 1 1h10M3 15v-4m0 4h9m-9-4V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3M3 11h11m-2-.208V19m3-4h1.99M21 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FlowbiteToggleHeaderCellOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
