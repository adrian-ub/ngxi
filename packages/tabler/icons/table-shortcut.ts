import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTableShortcutIcon],svg[tabler-table-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 13V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8M3 10h18M10 3v11m-8 8l5-5"></svg:path><svg:path d="M7 21.5V17H2.5"></svg:path></svg:g>`,
})
export class TablerTableShortcutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
