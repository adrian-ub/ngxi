import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHierarchyOffIcon],svg[tabler-hierarchy-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14.585-1.413a2 2 0 0 0 2.813 2.843"></svg:path><svg:path d="M6.5 17.5L12 13l5.5 4.5M12 7v1m0 4v1M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHierarchyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
