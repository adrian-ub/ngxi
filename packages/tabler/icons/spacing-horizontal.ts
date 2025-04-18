import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSpacingHorizontalIcon],svg[tabler-spacing-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M4 20h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4m8 4v8"></svg:path>`,
})
export class TablerSpacingHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
