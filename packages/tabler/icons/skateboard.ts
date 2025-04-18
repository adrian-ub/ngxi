import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSkateboardIcon],svg[tabler-skateboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2-1"></svg:path>`,
})
export class TablerSkateboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
