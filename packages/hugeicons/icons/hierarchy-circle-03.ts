import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHierarchyCircle03Icon],svg[hugeicons-hierarchy-circle-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m0-14a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-6 0c-2.453.183-3 1.203-3 4.653V12m3 7c-2.453-.183-3-1.203-3-4.653V12m0 0h-3m0 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsHierarchyCircle03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
