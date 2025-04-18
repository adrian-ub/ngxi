import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWalkIcon],svg[tabler-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M7 21l3-4m6 4l-2-4l-3-3l1-6"></svg:path><svg:path d="m6 12l2-3l4-1l3 3l3 1"></svg:path></svg:g>`,
})
export class TablerWalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
