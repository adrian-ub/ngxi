import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHierarchyCircle01Icon],svg[hugeicons-hierarchy-circle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M8 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M12 8v4m0 0H8.5c-1.65 0-2.475 0-2.987.44C5 12.878 5 13.585 5 15v1m7-4h3.5c1.65 0 2.475 0 2.987.44C19 12.878 19 13.585 19 15v1"></svg:path></svg:g>`,
})
export class HugeiconsHierarchyCircle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
