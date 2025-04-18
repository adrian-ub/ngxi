import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHierarchyCircle02Icon],svg[hugeicons-hierarchy-circle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 22a3 3 0 1 1 0-6a3 3 0 0 1 0 6m14 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-6c-.183-2.453-1.203-3-4.653-3H9.653c-3.45 0-4.47.547-4.653 3m7-6a4 4 0 1 1 0-8a4 4 0 0 1 0 8" color="currentColor"></svg:path>`,
})
export class HugeiconsHierarchyCircle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
