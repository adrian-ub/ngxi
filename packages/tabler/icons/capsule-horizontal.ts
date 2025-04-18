import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCapsuleHorizontalIcon],svg[tabler-capsule-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6"></svg:path>`,
})
export class TablerCapsuleHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
