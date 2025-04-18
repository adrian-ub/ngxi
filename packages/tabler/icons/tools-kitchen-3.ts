import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerToolsKitchen3Icon],svg[tabler-tools-kitchen-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v17M4 4v3a3 3 0 1 0 6 0V4m4 4a3 4 0 1 0 6 0a3 4 0 1 0-6 0m3 4v9"></svg:path>`,
})
export class TablerToolsKitchen3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
