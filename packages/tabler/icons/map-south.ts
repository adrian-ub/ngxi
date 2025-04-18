import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapSouthIcon],svg[tabler-map-south-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M10 14.25c0 .414.336.75.75.75H13a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2.25a.75.75 0 0 1 .75.75"></svg:path></svg:g>`,
})
export class TablerMapSouthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
