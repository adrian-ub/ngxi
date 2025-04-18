import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHierarchy2Icon],svg[tabler-hierarchy-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3h4v4h-4zM3 17h4v4H3zm14 0h4v4h-4zM7 17l5-4l5 4M12 7v6"></svg:path>`,
})
export class TablerHierarchy2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
