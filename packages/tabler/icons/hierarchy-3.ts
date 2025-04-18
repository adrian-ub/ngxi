import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHierarchy3Icon],svg[tabler-hierarchy-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-4 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12-7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-9 5l2-3m2-4l2-3m2 0l2 3m2 4l2 3m-4-3l-2 3m-4-3l2 3"></svg:path>`,
})
export class TablerHierarchy3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
