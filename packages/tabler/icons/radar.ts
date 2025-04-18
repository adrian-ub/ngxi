import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRadarIcon],svg[tabler-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12h-8a1 1 0 1 0-1 1v8a9 9 0 0 0 9-9"></svg:path><svg:path d="M16 9a5 5 0 1 0-7 7"></svg:path><svg:path d="M20.486 9A9 9 0 1 0 9.004 20.495"></svg:path></svg:g>`,
})
export class TablerRadarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
