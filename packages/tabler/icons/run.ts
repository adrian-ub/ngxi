import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRunIcon],svg[tabler-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4 17l5 1l.75-1.5M15 21v-4l-4-3l1-6"></svg:path><svg:path d="M7 12V9l5-1l3 3l3 1"></svg:path></svg:g>`,
})
export class TablerRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
