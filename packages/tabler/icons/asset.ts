import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAssetIcon],svg[tabler-asset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 15a6 6 0 1 0 12 0a6 6 0 1 0-12 0"></svg:path><svg:path d="M7 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0M17 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2.782 12.975l6.619-12.174M6.079 9.756l12.217-6.631"></svg:path><svg:path d="M7 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class TablerAssetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
