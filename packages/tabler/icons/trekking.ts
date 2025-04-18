import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrekkingIcon],svg[tabler-trekking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M7 21l2-4m4 4v-4l-3-3l1-6l3 4l3 2"></svg:path><svg:path d="m10 14l-1.827-1.218a2 2 0 0 1-.831-2.15l.28-1.117A2 2 0 0 1 9.561 8H11l4 1l3-2m-1 5v9m-1-1h2"></svg:path></svg:g>`,
})
export class TablerTrekkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
