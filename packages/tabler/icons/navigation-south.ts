import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNavigationSouthIcon],svg[tabler-navigation-south-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8.25c0 .414.336.75.75.75H13a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.25a.75.75 0 0 1 .75.75M16 21l-4-8l-4 8l4-2z"></svg:path>`,
})
export class TablerNavigationSouthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
