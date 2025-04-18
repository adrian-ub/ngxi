import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBracesOffIcon],svg[tabler-braces-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.176 5.177C5.063 5.428 5 5.707 5 6v3c0 1.657-.895 3-2 3c1.105 0 2 1.343 2 3v3a2 2 0 0 0 2 2M17 4a2 2 0 0 1 2 2v3c0 1.657.895 3 2 3c-1.105 0-2 1.343-2 3m-.176 3.821A2 2 0 0 1 17 20M3 3l18 18"></svg:path>`,
})
export class TablerBracesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
