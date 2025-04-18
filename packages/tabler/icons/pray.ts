import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPrayIcon],svg[tabler-pray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0M7 20h8l-4-4V9l4 3l2-2"></svg:path>`,
})
export class TablerPrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
